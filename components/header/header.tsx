import Logo from "public/images/whiteLogo.png";
import Image from "next/image";

import { StyledHeader, Content } from "./styles";
import { HeaderInput } from "./headerInput";
import { HeaderAuth } from "./headerAuth";

export const Header = () => {
  return (
    <StyledHeader>
      <Content>
        <Image src={Logo} alt="Logo Organizze" />
        <HeaderInput />
        <HeaderAuth />
      </Content>
    </StyledHeader>
  );
};
