import dynamic from "next/dynamic";
import { Flex, Paragraph } from "styles";
import { BsReply } from "react-icons/bs";
import { Comment } from "./comment";
import { Container } from "./styles";
import { useMemo, useState } from "react";
import { IComment } from "types/guide";
import { CommentsReadAnswer } from "./commentsReadAnswer";

const CommentWrite = dynamic(() =>
  import("./commentWrite").then((mod) => mod.CommentWrite)
);

export const CommentRead = ({
  comment,
  addComment,
  showLogin,
  showReply = true,
}: IProps) => {
  const [reply, setReply] = useState(false);
  const [qt, setQt] = useState(comment.commentsCount);

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

  const addReplyComment = (comment: IComment) => {
    setReply(false);
    setQt(qt + 1);
    addComment(comment);
  };

  return (
    <>
      <Container>
        <Comment user={comment.user} />
        <Paragraph mb="24px">{comment.message}</Paragraph>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Paragraph fontSize="12px" mb="0px">
            {date}
          </Paragraph>
          <BsReply
            size="28px"
            onClick={() => setReply(!reply)}
            className="pointer"
          />
        </Flex>
      </Container>
      {showReply && reply && (
        <Flex ml="10%" width="90%">
          <CommentWrite
            parent={comment.id}
            addComment={addReplyComment}
            showLogin={showLogin}
          />
        </Flex>
      )}
      {qt > 0 && (
        <CommentsReadAnswer parent={comment} addComment={addComment} />
      )}
    </>
  );
};

interface IProps {
  comment: IComment;
  addComment: (comment: IComment) => void;
  showReply: boolean;
  showLogin?: () => boolean;
}
