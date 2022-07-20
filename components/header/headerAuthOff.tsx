import Link from "next/link";
import { LinkText as Text } from "./styles";

export const HeaderAuthOff = () => {
  return (
    <div>
      <Link href="/signin">
        <Text>Entrar</Text>
      </Link>
      <Link href="/signup">
        <Text active={true}>Registrar-se</Text>
      </Link>
    </div>
  );
};
