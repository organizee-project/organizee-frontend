import { Button } from "./styles";

import { BsPlus, BsPerson } from "react-icons/bs";
import Link from "next/link";
import { Options } from "components/options";
import { useState } from "react";
import { logout as firebaseLogout } from "utils/firebase";
import { useRouter } from "next/router";
import { useCookie } from "utils/hooks";

export const HeaderAuthOn = () => {
  const router = useRouter();
  const [openOptions, setOpenOptions] = useState(false);

  const { removeCookie, getCookie } = useCookie("user");
  const { removeCookie: removeToken } = useCookie("token");

  const logout = () => {
    firebaseLogout();
    removeCookie();
    removeToken();
    router.push("/");
  };

  const { username } = getCookie();
  return (
    <div>
      <Link href="/add">
        <Button>
          <BsPlus size="24px" />
        </Button>
      </Link>

      <Button onClick={() => setOpenOptions(!openOptions)}>
        <BsPerson size="24px" />
        <Options
          open={openOptions}
          itens={[
            {
              name: "Meu Perfil",
              onClick: () => {
                router.push("/" + username);
              },
            },
            {
              name: "Sair",
              onClick: () => {
                logout();
              },
            },
          ]}
        />
      </Button>
    </div>
  );
};
