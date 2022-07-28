import { Container } from "styles/styles";
import { Filter } from "./homeContentFilter";
import { Posts } from "./homeContentPosts";

export const HomeContent = () => (
  <>
    <Filter />
    <Container>
      <Posts />
    </Container>
  </>
);
