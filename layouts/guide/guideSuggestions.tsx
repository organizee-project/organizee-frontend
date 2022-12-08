import { Guide } from "components/guide";
import { Slider } from "components/slider";
import { useGuidesList } from "services/guides";
import { Container, Title3 } from "styles";
import { Button } from "./styles";

export const GuideSuggestions = ({ categories }) => {
  const { data } = useGuidesList("popularity", categories[0]?.slug);

  return (
    <Container mt="100px" mb="100px">
      <Title3 color="var(--black)">Trilhas relacionadas</Title3>
      <Slider
        rightButton={<Button>{">"}</Button>}
        leftButton={<Button>{"<"}</Button>}
        width="305px"
        jump={300}
      >
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
      </Slider>
    </Container>
  );
};
