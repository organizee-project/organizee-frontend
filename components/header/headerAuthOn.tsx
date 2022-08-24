import { Button } from "./styles";

import { BsPlus, BsPerson } from "react-icons/bs";

export const HeaderAuthOn = () => {
  return (
    <div>
      <Button>
        <BsPlus size="24px" />
      </Button>
      <Button>
        <BsPerson size="24px" />
      </Button>
    </div>
  );
};
