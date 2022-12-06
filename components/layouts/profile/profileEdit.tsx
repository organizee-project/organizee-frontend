import { useState, useContext } from "react";

import Image from "next/image";

import { UserContext } from "contexts/user";
import { Button } from "components/button";
import { RoundedPicture, Paragraph } from "styles";
import { useFollowUser } from "services/users";
import { IUserProfile } from "types/user";

import { InfoContainer } from "./styles";

import { toast } from "react-toastify";

export const ProfileEdit = ({ user }: Props) => {
  const [edit, setEdit] = useState(false);

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

interface Props {
  user: IUserProfile;
}
