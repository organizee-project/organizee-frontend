import { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { IUserProfile } from "types/user";
import { Flex, Container } from "styles";

import { ProfileActivity } from "./profileActivity";
import { ProfileInfos } from "./profileInfos";
import { getUserInfos } from "services/users";
import { UserContext } from "contexts/user";

export const LayoutProfile = ({ children }) => {
  const router = useRouter();
  const { username } = router.query;

  const { user } = useContext(UserContext);

  const [localUser, setLocalUser] = useState<IUserProfile>();
  const [isLogged, setIsLogged] = useState(false);

  const getUser = async () => {
    const data = await getUserInfos(username as string);
    setLocalUser(data.user);
    setIsLogged(false);
  };

  useEffect(() => {
    if (username) {
      if (user.username === username) {
        setLocalUser(user);
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
        <ProfileInfos user={localUser} isLogged={isLogged} />
        <ProfileActivity>{children}</ProfileActivity>
      </Flex>
    </Container>
  );
};
