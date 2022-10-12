import { Button } from "./styles";

import { BsPlus, BsPerson } from "react-icons/bs";
import Link from "next/link";
import { Options } from "components/options";
import { useState } from "react";
import { logout } from "services/firebase";
import { useRouter } from "next/router";

export const HeaderAuthOn = () => {
  const route = useRouter();
  const [openOptions, setOpenOptions] = useState(false);

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
                route.push("/me/aaa");
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
