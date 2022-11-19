import Link from "next/link";
import { useRouter } from "next/router";
import { Item } from "./styles";

export const ProfileActivity = ({ children }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const { username } = query;

  return (
    <div>
      <nav>
        <ul>
          <Link href={`/${username}`}>
            <Item active={pathname === "/[username]"}>Trilhas Criadas</Item>
          </Link>
          <Link href={`/${username}/likes`}>
            <Item active={pathname.includes("likes")}>Trilhas Curtidas</Item>
          </Link>
          <Link href={`/${username}/activity`}>
            <Item active={pathname.includes("activity")}>
              Atividade do Perfil
            </Item>
          </Link>
        </ul>
      </nav>
      {children}
    </div>
  );
};
