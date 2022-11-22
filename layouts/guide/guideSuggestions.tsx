import { Guide } from "components/guide";
import { Slider } from "components/slider";
import { useGuidesList } from "services/guides";
import { Container } from "styles";
import { Text, Button } from "./styles";

export const GuideSuggestions = ({ categories }) => {
  const { data } = useGuidesList("popularity", categories[0]?.slug);

  return (
    <Container mt="100px" mb="100px">
      <Text>Trilhas relacionadas</Text>
      <Slider
        rightButton={<Button>{">"}</Button>}
        leftButton={<Button>{"<"}</Button>}
        width="305px"
      >
        {data &&
          data.pages.map((page) =>
            page.items.map((guide) => <Guide key={guide.slug} guide={guide} />)
          )}
      </Slider>
    </Container>
  );
};
