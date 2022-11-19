import dynamic from "next/dynamic";
import { Flex, Paragraph } from "styles";
import { Comment } from "./comment";
import { Container } from "./styles";
import { useMemo } from "react";
import { IComment } from "types/guide";

export const CommentRead = ({ comment }: IProps) => {
  const date = useMemo(() => {
    const { createdAt } = comment;

    const createdAtDate = new Date(createdAt);
    const day = createdAtDate.getDate();
    const month = createdAtDate.getMonth();
    const year = createdAtDate.getFullYear();

    const hour = createdAtDate.getHours();
    const minutes = createdAtDate.getMinutes();

    return `${day}/${month}/${year} - ${hour}h${minutes}`;
  }, [comment]);

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
