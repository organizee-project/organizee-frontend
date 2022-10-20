import { ReactElement } from "react";
import { Flex, Container } from "styles";
import { ProfileActivity } from "./profileActivity";
import { ProfileInfos } from "./profileInfos";

export const LayoutProfile = ({ children, id }) => {
  return (
    <Container paddingTop="35px">
      <Flex justifyContent="flex-start">
        <ProfileInfos />
        <ProfileActivity>{children}</ProfileActivity>
      </Flex>
    </Container>
  );
};
