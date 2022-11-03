import { Guide } from "components/guide";
import { Add } from "components/button";
import { GuideContainer } from "./styles";
import { useUserGuidesList } from "services/users";
import { useRouter } from "next/router";

export const Guides = () => {
  const router = useRouter();
  const { username } = router.query;

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useUserGuidesList(username as string);

  return (
    <>
      <GuideContainer>
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 12 }).map((_, i) => (
            <Guide isLoading={true} key={i} />
          ))}
      </GuideContainer>
      {!isLoading && hasNextPage && <Add onClick={fetchNextPage} />}
    </>
  );
};
