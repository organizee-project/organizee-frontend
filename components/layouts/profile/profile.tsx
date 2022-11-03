import { useEffect, useState } from "react";
import { useCookie } from "utils/hooks";

import { useRouter } from "next/router";

import { IUserProfile } from "types/user";
import { Flex, Container } from "styles";

import { ProfileActivity } from "./profileActivity";
import { ProfileInfos } from "./profileInfos";
import { getUserInfos } from "services/users";

export const LayoutProfile = ({ children }) => {
  const router = useRouter();
  const { username } = router.query;

  const { getCookie } = useCookie("user");
  const [user, setUser] = useState<IUserProfile>();
  const [isLogged, setIsLogged] = useState(false);

  const getUser = async () => {
    const data = await getUserInfos(username as string);
    setUser(data.user);
    setIsLogged(false);
  };

  useEffect(() => {
    if (username) {
      const logged = getCookie();

      if (logged.username === username) {
        setUser(logged);
        setIsLogged(true);
        return;
      }

      getUser();
    }
  }, [username]);

  if (!user) return <></>;

  return (
    <Container paddingTop="35px">
      <Flex justifyContent="flex-start">
        <ProfileInfos user={user} isLogged={isLogged} />
        <ProfileActivity>{children}</ProfileActivity>
      </Flex>
    </Container>
  );
};
