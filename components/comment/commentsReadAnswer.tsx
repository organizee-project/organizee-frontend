import { useState } from "react";
import { IComment } from "types/guide";
import { useCommentsAnswer } from "services/guides";
import { CommentRead } from "./commentRead";
import { Paragraph } from "styles";
import { Loader } from "components/loader";

export const CommentsReadAnswer = ({ parent, addComment }: IProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useCommentsAnswer(parent.id, {
      enabled: !!showAnswer,
    });

  return (
    <>
      {!showAnswer && (
        <Paragraph
          textAlign="center"
          className="pointer"
          onClick={() => setShowAnswer(true)}
        >
          Veja as respostas deste comentário
        </Paragraph>
      )}
      {data &&
        data.pages.map((page) =>
          page.items.map((item) => (
            <CommentRead
              comment={item}
              addComment={addComment}
              showReply={false}
              key={item.id}
            />
          ))
        )}
      {isLoading || (isFetchingNextPage && <Loader />)}

      {!isLoading && !isFetchingNextPage && hasNextPage && (
        <Paragraph
          textAlign="center"
          className="pointer"
          onClick={() => fetchNextPage()}
        >
          Veja mais respostas deste comentário
        </Paragraph>
      )}
    </>
  );
};

interface IProps {
  parent: IComment;
  addComment: (comment: IComment) => void;
}
