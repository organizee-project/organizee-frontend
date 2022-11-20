import dynamic from "next/dynamic";
import { Flex, Paragraph } from "styles";
import { BsReply } from "react-icons/bs";
import { Comment } from "./comment";
import { Container } from "./styles";
import { useEffect, useMemo, useState } from "react";
import { IComment } from "types/guide";
import { CommentsReadAnswer } from "./commentsReadAnswer";
import { useDate } from "utils/hooks";

const CommentWrite = dynamic(() =>
  import("./commentWrite").then((mod) => mod.CommentWrite)
);

export const CommentReply = ({ comment, showLogin }: IProps) => {
  const [reply, setReply] = useState(false);
  const [qt, setQt] = useState(comment.commentsCount);

  const [comments, setComments] = useState([]);

  const date = useDate(comment.createdAt);

  const addReplyComment = (comment: IComment) => {
    setReply(false);
    setQt(qt + 1);
    setComments([...comments, comment]);
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
      {reply && (
        <Flex ml="10%" width="90%">
          <CommentWrite
            parent={comment.id}
            addComment={addReplyComment}
            showLogin={showLogin}
          />
        </Flex>
      )}
      {qt > 0 && <CommentsReadAnswer parent={comment} newComments={comments} />}
    </>
  );
};

interface IProps {
  comment: IComment;
  showLogin: () => boolean;
}
