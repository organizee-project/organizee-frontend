import { Add as StyledAdd } from "./styles";
import { BsPlusLg } from "react-icons/bs";

export const Add = ({ onClick }: Props) => (
  <StyledAdd onClick={() => onClick()}>
    <BsPlusLg size="16px" color="var(--white)" />
  </StyledAdd>
);

interface Props {
  onClick: () => void;
}
