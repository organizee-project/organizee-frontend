import { useState, useContext } from "react";

import Image from "next/image";

import { UserContext } from "contexts/user";
import { Button } from "components/button";
import { RoundedPicture, Paragraph } from "styles";
import { useFollowUser } from "services/users";
import { IUserProfile } from "types/user";

import { InfoContainer } from "./styles";

import { toast } from "react-toastify";

export const ProfileInfos = ({ user, isLogged }: Props) => {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed);
  const { refreshToken } = useContext(UserContext);

  const { mutate } = useFollowUser(isFollowed, {
    onSuccess: () => {
      if (isFollowed) toast.success("Você deixou de seguir @" + user.username);
      else toast.success("Você está seguindo @" + user.username);

      setIsFollowed(!isFollowed);
    },
  });

  const onClickFollow = () => {
    refreshToken(() => {
      mutate(user.username);
    });
  };

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
      {!isLogged && (
        <Button width="100%" onClick={() => onClickFollow()}>
          {isFollowed ? "Seguindo" : "Seguir"}
        </Button>
      )}
      <Paragraph mt="24px">{user.description}</Paragraph>
    </InfoContainer>
  );
};

interface Props {
  user: IUserProfile;
  isLogged: boolean;
}
