import Image from "next/image";
import BannerImg from "public/images/banner.png";

import { ContainerFlex, Title } from "styles";
import { BannerBackground, TextWrapper, Subtitle } from "./styles";

export const Banner = () => {
  return (
    <BannerBackground>
      <ContainerFlex>
        <TextWrapper>
          <Title color="light-blue">Organize e compartilhe seus estudos</Title>
          <Subtitle>
            Encontre os seus interesses da melhor forma e se conecte com pessoas
            como você!
          </Subtitle>
        </TextWrapper>
        <Image
          src={BannerImg}
          alt="Imagem de boneco com polegar rosa na mão"
        ></Image>
      </ContainerFlex>
    </BannerBackground>
  );
};
