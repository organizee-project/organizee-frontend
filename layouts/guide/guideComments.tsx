import { Container, Divider } from "styles";
import { Background, Text } from "./styles";
import { CommentRead } from "components/comment";
import { GuideCommentsAdd } from "./guideCommentsAdd";

export const GuideComments = ({ comments }) => {
  return (
    <Background>
      <Container>
        <Text>Comentários</Text>
        <GuideCommentsAdd />
      </Container>
      <Divider />
      <Container>
        {comments.map((comment) => (
          <CommentRead comment={comment} key={comment.id} />
        ))}
      </Container>
    </Background>
  );
};
