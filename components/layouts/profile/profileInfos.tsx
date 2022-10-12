import { Button } from "components/button";
import Image from "next/image";
import { InfoContainer, ImageContainer, ButtonContainer } from "./styles";
import { HiBan } from "react-icons/hi";

export const ProfileInfos = ({ isAuth = true }) => {
  return (
    <InfoContainer>
      <ImageContainer>
        <Image
          src={"https://images.unsplash.com/photo-1508138221679-760a23a2285b"}
          layout="fill"
          alt="foto de perfil"
        />
      </ImageContainer>

      <h1>Tatiana Ferreira de Lima</h1>
      <p className="mb-5">@piresluna</p>
      {isAuth ? (
        <ButtonContainer>
          <Button width="84%">Seguindo</Button>
          <HiBan size="24px" />
        </ButtonContainer>
      ) : (
        <Button>Seguindo</Button>
      )}

      <p className="mt-6">Breve bibliografia com limite de dígitos</p>
    </InfoContainer>
  );
};
