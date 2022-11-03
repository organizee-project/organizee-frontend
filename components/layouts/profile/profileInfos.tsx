import { Button } from "components/button";
import Image from "next/image";
import { InfoContainer, ButtonContainer } from "./styles";
import { RoundedPicture, Paragraph } from "styles";

export const ProfileInfos = () => {
  return (
    <InfoContainer>
      <RoundedPicture height="284px" width="284px">
        <Image
          src={"https://images.unsplash.com/photo-1508138221679-760a23a2285b"}
          layout="fill"
          alt="foto de perfil"
        />
      </RoundedPicture>

      <h1>Tatiana Ferreira de Lima</h1>
      <Paragraph mb="20px">@piresluna</Paragraph>
      <Button width="100%">Seguindo</Button>
      <Paragraph mt="24px">Breve bibliografia com limite de dígitos</Paragraph>
    </InfoContainer>
  );
};
