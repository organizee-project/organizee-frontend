import { Header } from "components/header";
import { Container } from "./styles";

export const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
