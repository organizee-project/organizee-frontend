import { Flex, Paragraph } from "styles";
import { Comment } from "./comment";
import { Container } from "./styles";
import { IComment } from "types/guide";
import { useDate } from "utils/hooks";

export const CommentRead = ({ comment }: IProps) => {
  const date = useDate(comment.createdAt);

  return (
    <>
      <Container>
        <Comment user={comment.user} />
        <Paragraph mb="24px">{comment.message}</Paragraph>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Paragraph fontSize="12px" mb="0px">
            {date}
          </Paragraph>
        </Flex>
      </Container>
    </>
  );
};

interface IProps {
  comment: IComment;
}
