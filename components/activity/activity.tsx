import Image from "next/image";

import { Container, LoadingImage } from "./styles";
import { RoundedPicture, Paragraph, Span } from "styles";
import { IActivity, IUser } from "types/user";

export const Activity = ({ activity, isLoading, user }: Props) => {
  const { imgUrl, name } = user;
  if (isLoading)
    return (
      <Container>
        <LoadingImage className="skeleton" />
        <Paragraph width="200px" height="12px" className="skeleton" />
      </Container>
    );

  return (
    <Container>
      <RoundedPicture height="72px" width="72px" mr="26px">
        <Image
          src={
            imgUrl != ""
              ? imgUrl
              : "https://images.unsplash.com/photo-1508138221679-760a23a2285b"
          }
          layout="fill"
          alt="foto de perfil"
        />
      </RoundedPicture>
      <Paragraph>
        <Span fontWeight="bold">{name}</Span>
        {activity.text}
      </Paragraph>
    </Container>
  );
};

interface Props {
  activity: IActivity;
  isLoading: boolean;
  user: IUser;
}
