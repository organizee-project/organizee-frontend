import { Container } from "./styles";
import { Guide } from "components/guide";
import { useGuidesList } from "services/guides";
import { Add } from "components/button";

export const Guides = ({ sortBy }: Props) => {
  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useGuidesList(sortBy);

  return (
    <>
      <Container>
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 12 }).map((_, i) => (
            <Guide isLoading={true} key={i} />
          ))}
      </Container>
      {!isLoading && hasNextPage && <Add onClick={fetchNextPage} />}
    </>
  );
};

interface Props {
  sortBy: string;
}
