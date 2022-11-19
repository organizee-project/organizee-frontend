import { useContext, useMemo } from "react";
import Image from "next/image";

import { Container, LoadingImage } from "./styles";
import { RoundedPicture, Paragraph, Span } from "styles";
import { EActivityType, IActivity, IUser } from "types/user";
import { UserContext } from "contexts/user";

export const Activity = ({ activity, isLoading }: Props) => {
  const {
    user: { imgUrl, username },
  } = useContext(UserContext);

  const text = useMemo(() => {
    if (isLoading) return "";

    if (activity.type === EActivityType.Like) return " curtiu uma trilha";
    if (activity.type === EActivityType.Save) return " salvou uma trilha";
    if (activity.type === EActivityType.Comment) return " comentou uma trilha";
    if (activity.type === EActivityType.AddGuide)
      return " adicionou uma trilha";
    if (activity.type === EActivityType.Follow)
      return " seguiu um novo usuário";

    return "entrou no aplicativo";
  }, [activity]);

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
        <Span fontWeight="bold">{username}</Span>
        {text}
      </Paragraph>
    </Container>
  );
};

interface Props {
  activity?: IActivity;
  isLoading: boolean;
}
