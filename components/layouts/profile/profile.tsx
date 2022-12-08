import { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Flex, Container } from "styles";

import { ProfileActivity } from "./profileActivity";
import { ProfileInfos } from "./profileInfos";
import { ProfileEdit } from "./profileEdit";
import { getUserInfos } from "services/users";
import { AuthContext } from "contexts/auth";
import { ProfileContext } from "contexts/profile";

export const LayoutProfile = ({ children }) => {
  const router = useRouter();
  const { username } = router.query;

  const { profile, updateProfile } = useContext(ProfileContext);
  const { user } = useContext(AuthContext);

  const [isLogged, setIsLogged] = useState(false);

  const getUser = async () => {
    const data = await getUserInfos(username as string);
    updateProfile(data.user);
    setIsLogged(false);
  };

  useEffect(() => {
    if (user)
      if (user.username === username) {
        updateProfile(user);
        setIsLogged(true);
        return;
      }

    getUser();
  }, [username]);

  if (!profile) return <></>;

  return (
    <Container paddingTop="35px">
      <Flex justifyContent="flex-start">
        {!isLogged ? <ProfileInfos /> : <ProfileEdit />}
        <ProfileActivity>{children}</ProfileActivity>
      </Flex>
    </Container>
  );
};
