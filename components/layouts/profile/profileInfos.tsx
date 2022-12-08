import { useState, useContext } from "react";

import Image from "next/image";

import { AuthContext } from "contexts/auth";
import { Button } from "components/button";
import { RoundedPicture, Paragraph } from "styles";
import { useFollowUser } from "services/users";

import { InfoContainer } from "./styles";

import { toast } from "react-toastify";
import { ProfileContext } from "contexts/profile";

export const ProfileInfos = () => {
  const { profile } = useContext(ProfileContext);

  const [isFollowed, setIsFollowed] = useState(profile.isFollowed);
  const { refreshToken } = useContext(AuthContext);

  const { mutate } = useFollowUser(isFollowed, {
    onSuccess: () => {
      if (isFollowed)
        toast.success("Você deixou de seguir @" + profile.username);
      else toast.success("Você está seguindo @" + profile.username);

      setIsFollowed(!isFollowed);
    },
  });

  const onClickFollow = () => {
    refreshToken(() => {
      mutate(profile.username);
    });
  };

  return (
    <InfoContainer>
      <RoundedPicture height="284px" width="284px">
        <Image
          src={
            profile.imgUrl != "" ? profile.imgUrl : "/images/icon-organizze.png"
          }
          layout="fill"
          alt="foto de perfil"
        />
      </RoundedPicture>

      <h1>{profile.fullName}</h1>
      <Paragraph mb="20px">@{profile.username}</Paragraph>
      <Button width="100%" onClick={() => onClickFollow()}>
        {isFollowed ? "Seguindo" : "Seguir"}
      </Button>
      <Paragraph mt="24px">{profile.description}</Paragraph>
    </InfoContainer>
  );
};
