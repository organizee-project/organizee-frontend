import { Container } from "./styles";
import { Guide } from "components/guide";
import { getGuidesList } from "services/guides";
import { Add } from "components/button";
import { useInfiniteQuery } from "react-query";

export const Guides = () => {
  const { isLoading, isFetchingNextPage, data, fetchNextPage } =
    useInfiniteQuery(["home"], getGuidesList, {
      getNextPageParam: (data) => {
        return data.nextPage;
      },
    });

  return (
    <>
      <Container>
        {data &&
          data.pages.map((page) =>
            page.itens.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 12 }).map((_, i) => (
            <Guide isLoading={true} key={i} />
          ))}
      </Container>
      {!isLoading && <Add onClick={fetchNextPage} />}
    </>
  );
};
