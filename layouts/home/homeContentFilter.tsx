import { Container } from "styles";

import { Slider } from "components/slider";
import { Select } from "components/select";

import { BsChevronDown } from "react-icons/bs";
import { useCategories } from "services/categories";
import { RightButton, LeftButton } from "./styles";

const sortByOptions = [
  { id: "popularity", name: "Popular" },
  { id: "date", name: "Recentes" },
];

export const Filter = ({ handleSortBy }: Props) => {
  const { data } = useCategories();

  return (
    <Container
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      mt="40px"
    >
      <Slider
        rightButton={<RightButton>{">"}</RightButton>}
        leftButton={<LeftButton>{"<"}</LeftButton>}
        maxWidth="1130px"
      >
        {data &&
          data.map((option) => (
            <div key={option.id} className="pointer">
              {option.name}
            </div>
          ))}
      </Slider>
      <Select
        options={sortByOptions}
        icon={<BsChevronDown className="select__icon" />}
        onChange={(item) => {
          handleSortBy(item);
        }}
      />
    </Container>
  );
};

interface Props {
  handleSortBy: (e: string) => void;
}
