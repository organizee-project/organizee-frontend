import { Button } from "components/button";
import { UserContext } from "contexts/user";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useCreateComment } from "services/guides";
import { Flex } from "styles";
import { IComment } from "types/guide";
import { Comment } from "./comment";
import { Container, TextArea } from "./styles";

interface IProps {
  parent?: string;
  addComment: (comment: IComment) => void;
  showLogin: () => boolean;
}

export const CommentWrite: React.FC<IProps> = ({
  addComment,
  parent,
  showLogin,
}) => {
  const [message, setMessage] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  const { user, refreshToken } = useContext(UserContext);
  const { mutate } = useCreateComment(slug as string, {
    onSuccess: async ({ data }) => {
      setMessage("");
      addComment(data);
    },
  });

  const sendComment = () => {
    if (showLogin()) return;

    const send = { message };
    if (parent) send["referencedComment"] = parent;

    refreshToken(() => {
      mutate(send);
    });
  };

  return (
    <Container>
      <Comment user={user} />
      <TextArea
        placeholder="O que você achou desta trilha?"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <Flex justifyContent="flex-end">
        <Button variant="blue" mr="0px" onClick={() => sendComment()}>
          Enviar
        </Button>
      </Flex>
    </Container>
  );
};
