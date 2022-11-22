import { Flex, Paragraph, RoundedPicture } from "styles";

import Image from "next/image";
import Link from "next/link";

export const Comment = ({ user }) => {
  return (
    <Flex justifyContent="flex-start" mb="22px" alignItems="center">
      <RoundedPicture height="48px" width="48px">
        <Image
          src={
            user && user.imgUrl != ""
              ? user.imgUrl
              : "/images/icon-organizze.png"
          }
          alt={"foto de perfil"}
          layout="fill"
        />
      </RoundedPicture>
      <Link href={user ? `/user/${user.username}` : "/signin"}>
        <Paragraph ml="12px" fontWeight="medium" mb="0px" className="pointer">
          {user ? "@" + user.username : "Faça o login para comentar"}
        </Paragraph>
      </Link>
    </Flex>
  );
};
