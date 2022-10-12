import { Container } from "./styles";

export const Check = ({ text, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      {text}
    </Container>
  );
};
