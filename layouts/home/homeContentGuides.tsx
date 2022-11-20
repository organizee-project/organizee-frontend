import { Container } from "./styles";
import { Guide } from "components/guide";
import { useGuidesList } from "services/guides";
import { Add } from "components/button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "contexts/user";

export const Guides = ({ sortBy, category }: Props) => {
  const [token, setToken] = useState(false);
  const { user, refreshToken } = useContext(UserContext);

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useGuidesList(sortBy, category, {
      enabled: !!(token && user) || category !== "follows",
    });

  useEffect(() => {
    if (user)
      refreshToken(() => {
        setToken(true);
      });
  }, []);

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
  category: string;
}
