import { Container } from "./styles";

export const Categories = ({ options }) => (
  <Container>
    {options.map((option) => (
      <li key={option.id}>{option.name}</li>
    ))}
  </Container>
);
