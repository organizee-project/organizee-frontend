import { Guide } from "components/guide";
import { Add } from "components/button";
import { Paragraph } from "styles";
import { GuideContainer } from "./styles";
import { useUserSavedList } from "services/users";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "contexts/auth";

export const Saved = () => {
  const [token, setToken] = useState(false);
  const { refreshToken } = useContext(AuthContext);

  const router = useRouter();
  const { username } = router.query;

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useUserSavedList(username as string);

  useEffect(() => {
    refreshToken(() => {
      setToken(true);
    });
  }, []);

  return (
    <>
      <GuideContainer>
        {data && data.pages[0].count === 0 && (
          <Paragraph>Não há trilhas salvas</Paragraph>
        )}
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
