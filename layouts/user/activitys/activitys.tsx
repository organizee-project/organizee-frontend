import { useRouter } from "next/router";
import { ActivityContainer } from "./styles";
import { Activity } from "components/activity";
import { useUserActivitiesList } from "services/users";
import { Add } from "components/button";
import { Paragraph } from "styles";

export const Activitys = () => {
  const router = useRouter();
  const { username } = router.query;

  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    useUserActivitiesList(username as string);

  return (
    <>
      <ActivityContainer>
        {data && data.pages[0].count === 0 && (
          <Paragraph>Não há atividades neste perfil</Paragraph>
        )}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 20 }).map((_, i) => (
            <Activity isLoading={true} key={i} />
          ))}
        {data &&
          data.pages.map((page, i) =>
            page.items.map((item) => (
              <Activity key={i} activity={item} isLoading={false} />
            ))
          )}
        {!isLoading && hasNextPage && <Add onClick={fetchNextPage} />}
      </ActivityContainer>
    </>
  );
};
