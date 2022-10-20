import { Button } from "components/button";
import { Flex } from "styles";
import { CommentUser } from "./commentUser";
import { Container, TextArea } from "./styles";

export const CommentWrite = () => {
  const user = {
    username: "user",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721",
  };

  return (
    <Container>
      <CommentUser user={user} />
      <TextArea placeholder="O que você achou desta trilha?" />
      <Flex justifyContent="flex-end">
        <Flex justifyContent="flex-start" width="220px">
          <Button>Cancelar</Button>
          <Button variant="blue">Responder</Button>
        </Flex>
      </Flex>
    </Container>
  );
};
