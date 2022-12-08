import { useState, useContext } from "react";

import Image from "next/image";

import { AuthContext } from "contexts/auth";
import { Button } from "components/button";
import { RoundedPicture, Paragraph } from "styles";

import { InfoContainer } from "./styles";

import { ProfileContext } from "contexts/profile";

export const ProfileEdit = () => {
  const [edit, setEdit] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <InfoContainer>
      <RoundedPicture height="284px" width="284px">
        <Image
          src={user.imgUrl != "" ? user.imgUrl : "/images/icon-organizze.png"}
          layout="fill"
          alt="foto de perfil"
        />
      </RoundedPicture>

      <h1>{user.fullName}</h1>
      <Paragraph mb="20px">@{user.username}</Paragraph>
      <Button width="100%" onClick={() => setEdit(true)}>
        Editar
      </Button>
      <Paragraph mt="24px">{user.description}</Paragraph>
    </InfoContainer>
  );
};
