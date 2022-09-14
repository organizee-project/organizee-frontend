import Logo from "public/images/whiteLogo.png";
import Image from "next/image";
import Link from "next/link";

import { ContainerFlex } from "styles/styles";
import { StyledHeader } from "./styles";
import { HeaderInput } from "./headerInput";
import { HeaderAuth } from "./headerAuth";

export const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Image src={Logo} alt="Logo Organizze" className="pointer" priority />
      </Link>
      <HeaderInput />
      <HeaderAuth />
    </StyledHeader>
  );
};
