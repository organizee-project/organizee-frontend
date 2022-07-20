import { Button } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export const HeaderAuthOn = () => {
  return (
    <div>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faUser} />
      </Button>
    </div>
  );
};
