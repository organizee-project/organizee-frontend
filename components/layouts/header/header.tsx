import { Header } from "components/header";
import { Container } from "./styles";

export const LayoutHeader = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
