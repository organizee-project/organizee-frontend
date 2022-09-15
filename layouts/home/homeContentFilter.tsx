import { ContainerFlex } from "styles/styles";

import { Slider } from "components/slider";
import { Select } from "components/select";

import { BsChevronDown } from "react-icons/bs";

const orderByOptions = [
  { id: "popular", name: "Popular" },
  { id: "most-recent", name: "Recentes" },
  { id: "alphabetic", name: "A-Z" },
];

const categories = [
  { id: 1, name: "Linguas Extrangeiras" },
  { id: 2, name: "Literatura Brasileira" },
  { id: 3, name: "Tecnologia" },
  { id: 4, name: "Design" },
  { id: 5, name: "Vestibulares" },
  { id: 6, name: "Filosofia" },
  { id: 7, name: "Ciências Naturais" },
  { id: 8, name: "Design" },
  { id: 9, name: "Vestibulares" },
  { id: 10, name: "Filosofia" },
  { id: 11, name: "Ciências Naturais" },
];

export const Filter = () => {
  const handleOrderBy = (e: string) => {
    console.log(e);
  };

  return (
    <ContainerFlex className="mt-4">
      <Slider
        rightButton={
          <div
            style={{
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              textAlign: "center",
              backgroundColor: "red",
              top: "50%",
            }}
          >
            {">"}
          </div>
        }
        maxWidth="1130px"
      >
        {categories.map((option) => (
          <div key={option.id} className="pointer">
            {option.name}
          </div>
        ))}
      </Slider>
      <Select
        options={orderByOptions}
        icon={<BsChevronDown className="select__icon" />}
        onChange={handleOrderBy}
      />
    </ContainerFlex>
  );
};
