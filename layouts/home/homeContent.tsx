import { Container } from "styles";
import { Filter } from "./homeContentFilter";
import { Guides } from "./homeContentGuides";

export const HomeContent = () => (
  <>
    <Filter />
    <Container>
      <Guides />
    </Container>
  </>
);
