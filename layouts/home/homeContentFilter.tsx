import { Container } from "styles";

import { Slider } from "components/slider";
import { Select } from "components/select";

import { BsChevronDown } from "react-icons/bs";
import { useCategories } from "services/categories";
import { RightButton, LeftButton } from "./styles";
import { useContext } from "react";
import { UserContext } from "contexts/user";

const sortByOptions = [
  { id: "popularity", name: "Popular" },
  { id: "date", name: "Recentes" },
];

export const Filter = ({ handleSortBy, handleCategory }: Props) => {
  const { user } = useContext(UserContext);
  const { data, isLoading } = useCategories();

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
        {user && !isLoading && (
          <div className="pointer" onClick={() => handleCategory("follows")}>
            Inscrições
          </div>
        )}
        {data &&
          data.map((option) => (
            <div
              className="pointer"
              key={option.id}
              onClick={() => handleCategory(option.slug)}
            >
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
  handleCategory: (e: string) => void;
}
