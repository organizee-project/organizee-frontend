import { Button } from "./styles";

import { BsPlus, BsPerson } from "react-icons/bs";
import Link from "next/link";
import { Options } from "components/options";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "contexts/user";

export const HeaderAuthOn = () => {
  const { logout, user } = useContext(UserContext);

  const router = useRouter();
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div>
      <Link href="/user/add">
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
                router.push("/user/" + user.username);
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
