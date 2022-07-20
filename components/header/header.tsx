import Logo from "public/images/whiteLogo.png";
import Image from "next/image";

import { ContainerFlex } from "styles/styles";
import { StyledHeader } from "./styles";
import { HeaderInput } from "./headerInput";
import { HeaderAuth } from "./headerAuth";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerFlex>
        <Image src={Logo} alt="Logo Organizze" />
        <HeaderInput />
        <HeaderAuth />
      </ContainerFlex>
    </StyledHeader>
  );
};
