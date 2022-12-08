import { Button } from "components/button";
import { LayoutGuide } from "components/layouts";

import { Flex } from "styles";
import { IPostGuide, IGuide, EGuideType } from "types/guide";
import { Open } from "./styles";

export const AddGuideView: React.FC<Props> = ({
  guide,
  setEdit,
  onSave,
  show,
}) => {
  const newGuide = {
    ...guide,
    categories: [],
    user: { username: "teste", imgUrl: "", name: "Usuário" },
    createdAt: "",
    likesCount: 0,
    slug: "",
    updatedAt: "",
    type: EGuideType.public,
  } as IGuide;

  return (
    <Open open={show}>
      <LayoutGuide guide={newGuide}>
        <Flex width="300px" justifyContent="space-between">
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

interface Props {
  guide: IPostGuide;
  setEdit: (value: boolean) => void;
  onSave: (newGuide: any) => void;
  show: boolean;
}
