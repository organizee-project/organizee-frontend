import dynamic from "next/dynamic";
import { Flex, Paragraph } from "styles";
import { BsReply } from "react-icons/bs";
import { Comment } from "./comment";
import { Container } from "./styles";
import { useState } from "react";

const CommentWrite = dynamic(() =>
  import("./commentWrite").then((mod) => mod.CommentWrite)
);

export const CommentRead = ({ comment, hasReply = true }) => {
  const [reply, setReply] = useState(false);

  return (
    <>
      <Container>
        <Comment user={comment.user} />
        <Paragraph mb="24px">{comment.content}</Paragraph>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Paragraph fontSize="12px" mb="0px">
            20/11/2022 - 10h55
          </Paragraph>
          {hasReply && (
            <BsReply
              size="28px"
              onClick={() => setReply(!reply)}
              className="pointer"
            />
          )}
        </Flex>
      </Container>
      {reply && <CommentWrite ml="10%" width="90%" />}
    </>
  );
};
