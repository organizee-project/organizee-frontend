import { Container, Divider, Title3 } from "styles";
import { Background } from "./styles";
import { CommentReply, CommentWrite } from "components/comment";
import { useRouter } from "next/router";
import { useCommentsBySlug } from "services/guides";
import { useEffect, useState } from "react";
import { InfiniteData } from "react-query";
import { IPagination } from "types/general";
import { IComment } from "types/guide";

export const GuideComments = ({ showLogin }: IProps) => {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] =
    useState<InfiniteData<IPagination<IComment>>>();

  const { data, isLoading } = useCommentsBySlug(slug as string);

  useEffect(() => {
    if (data) setComments(data);
  }, [data]);

  const addComment = (comment: IComment) => {
    const oldData = { ...comments };
    const pagesQt = oldData.pages.length;

    oldData.pages[pagesQt - 1].items.unshift(comment);
    setComments(oldData);
  };

  if (isLoading) return <></>;

  return (
    <Background>
      <Container>
        <Title3 color="var(--black)">Comentários</Title3>
        <CommentWrite addComment={addComment} showLogin={showLogin} />
      </Container>
      <Divider />
      <Container>
        {comments &&
          comments.pages.map((page) =>
            page.items.map((comment) => (
              <CommentReply
                showLogin={showLogin}
                comment={comment}
                key={comment.id}
              />
            ))
          )}
      </Container>
    </Background>
  );
};

interface IProps {
  showLogin: () => boolean;
}
