import { Container as Center, Paragraph, Title } from "styles";
import { Container } from "./styles";
import { Guide } from "components/guide";
import { useSearchList } from "services/search";
import { Add } from "components/button";
import { useRouter } from "next/router";

export const Search = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useSearchList(slug);

  return (
    <Center>
      <Title>{slug}</Title>
      {data && (
        <Paragraph>
          Existem {data.pages[0].count ?? 0} resultados disponíveis
        </Paragraph>
      )}
      <Container>
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 20 }).map((_, i) => (
            <Guide isLoading={true} key={i} />
          ))}
      </Container>
      {!isLoading && hasNextPage && <Add onClick={fetchNextPage} />}
    </Center>
  );
};
