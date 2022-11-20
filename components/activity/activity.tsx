import { useContext, useMemo } from "react";
import Image from "next/image";

import { Container, LoadingImage } from "./styles";
import { RoundedPicture, Paragraph, Span, Flex } from "styles";
import { EActivityType, IActivity } from "types/user";
import { UserContext } from "contexts/user";
import { useDate } from "utils/hooks";

export const Activity = ({ activity, isLoading }: Props) => {
  const {
    user: { imgUrl, username },
  } = useContext(UserContext);

  const date = useDate(activity?.date);

  const text = useMemo(() => {
    if (isLoading) return "";

    if (activity.type === EActivityType.Like)
      return " curtiu a trilha " + activity.description;
    if (activity.type === EActivityType.Save)
      return " salvou a trilha " + activity.description;
    if (activity.type === EActivityType.Comment)
      return " comentou na trilha " + activity.description;
    if (activity.type === EActivityType.AddGuide)
      return " adicionou uma nova trilha: " + activity.description;
    if (activity.type === EActivityType.Follow)
      return " seguiu o usuário " + activity.description;

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
      <Flex alignItems="center">
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
      </Flex>

      <Flex justifyContent="flex-end" alignItems="baseline">
        <Paragraph fontSize="12px" mb="0px">
          {date}
        </Paragraph>
      </Flex>
    </Container>
  );
};

interface Props {
  activity?: IActivity;
  isLoading: boolean;
}
