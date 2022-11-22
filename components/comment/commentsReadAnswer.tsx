import { useEffect, useState } from "react";
import { IComment } from "types/guide";
import { useCommentsAnswer } from "services/guides";
import { CommentRead } from "./commentRead";
import { Flex, Paragraph } from "styles";
import { Loader } from "components/loader";

export const CommentsReadAnswer = ({ parent, newComments }: IProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useCommentsAnswer(parent.id, {
      enabled: !!showAnswer,
    });

  const onMessageClick = () => {
    if (!showAnswer) setShowAnswer(true);
    else fetchNextPage();
  };

  return (
    <>
      <Flex ml="10%" width="90%">
        {newComments.map((item) => (
          <CommentRead comment={item} key={item.id} />
        ))}
      </Flex>
      <Flex ml="10%" width="90%">
        {data &&
          data.pages.map((page) =>
            page.items.map((item) => (
              <CommentRead comment={item} key={item.id} />
            ))
          )}
      </Flex>

      {isLoading || isFetchingNextPage ? (
        <Loader />
      ) : (
        parent.commentsCount > 0 &&
        (hasNextPage || !showAnswer) && (
          <Paragraph
            textAlign="center"
            className="pointer"
            onClick={() => onMessageClick()}
          >
            Veja as respostas deste comentário
          </Paragraph>
        )
      )}
    </>
  );
};

interface IProps {
  parent: IComment;
  newComments: IComment[];
}
