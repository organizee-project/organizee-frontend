import { Flex, Paragraph, RoundedPicture } from "styles";

import Image from "next/image";

export const CommentUser = ({ user }) => {
  return (
    <Flex justifyContent="flex-start" mb="22px" alignItems="center">
      <RoundedPicture height="48px" width="48px">
        <Image
          src={user.image}
          alt={"foto de perfil de " + user.name}
          layout="fill"
        />
      </RoundedPicture>
      <Paragraph ml="12px" fontWeight="medium">
        @{user.username}
      </Paragraph>
    </Flex>
  );
};
