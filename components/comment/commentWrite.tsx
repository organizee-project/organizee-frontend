import { Button } from "components/button";
import { Flex, GenericProps } from "styles";
import { Comment } from "./comment";
import { Container, TextArea } from "./styles";

export const CommentWrite = (props: GenericProps) => {
  const user = {
    username: "user",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
  };

  return (
    <Container {...props}>
      <Comment user={user} />
      <TextArea placeholder="O que você achou desta trilha?" />
      <Flex justifyContent="flex-end">
        <Button variant="blue" mr="0px">
          Responder
        </Button>
      </Flex>
    </Container>
  );
};
