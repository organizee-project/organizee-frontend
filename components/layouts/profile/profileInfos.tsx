import { useState } from "react";

import Image from "next/image";

import { Button } from "components/button";
import { RoundedPicture, Paragraph } from "styles";
import { useFollowUser, useUnfollowUser } from "services/users";
import { IUserProfile } from "types/user";

import { InfoContainer } from "./styles";

export const ProfileInfos = ({ user, isLogged }: Props) => {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed);

  const { mutate: follow } = useFollowUser({
    onSuccess: () => {
      setIsFollowed(true);
      // console.log(data);
    },
  });

  const { mutate: unfollow } = useUnfollowUser({
    onSuccess: () => {
      setIsFollowed(false);
      // console.log(data);
    },
  });

  const onClickFollow = () => {
    if (isFollowed) {
      unfollow(user.username);
    } else {
      follow(user.username);
    }
  };

  return (
    <InfoContainer>
      <RoundedPicture height="284px" width="284px">
        <Image
          src={
            user.imgUrl != ""
              ? user.imgUrl
              : "https://images.unsplash.com/photo-1508138221679-760a23a2285b"
          }
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
