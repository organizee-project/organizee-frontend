import { Button } from "components/button";
import { LayoutGuide } from "components/layouts";

import { Flex } from "styles/styles";
import { Open } from "./styles";

export const AddGuideView = ({ guide, setEdit, onSave, show }) => {
  return (
    <Open open={show}>
      <LayoutGuide guide={guide}>
        <Flex width="300px">
          <Button variant="disabled" width="45%" onClick={() => setEdit(true)}>
            Visualizar
          </Button>
          <Button variant="blue" width="45%" onClick={onSave}>
            Publicar
          </Button>
        </Flex>
      </LayoutGuide>
    </Open>
  );
};
export default AddGuideView;
