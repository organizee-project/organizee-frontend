import { Container, Item } from "./styles";

export const Options = ({ open, itens }) => {
  return (
    <Container open={open}>
      {itens.map((item, i) => (
        <Item onClick={item.onClick} key={i}>
          {item.name}
        </Item>
      ))}
    </Container>
  );
};
