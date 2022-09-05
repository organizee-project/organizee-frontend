import { ContainerFlex } from "styles/styles";
import { Categories } from "./styles";

import { Select } from "components/select";

import { BsChevronDown, BsFilter } from "react-icons/bs";

const orderByOptions = [
  { id: "popular", name: "Popular" },
  { id: "most-recent", name: "Recentes" },
  { id: "alphabetic", name: "A-Z" },
];

const filterOptions = [
  { id: "filtros", name: "Filtros" },
  { id: "most-recent", name: "opçao 1" },
  { id: "alphabetic", name: "opção 2" },
];

const categories = [
  { id: 1, name: "Linguas Extrangeiras" },
  { id: 2, name: "Literatura Brasileira" },
  { id: 3, name: "Tecnologia" },
  { id: 4, name: "Design" },
  { id: 5, name: "Vestibulares" },
  { id: 6, name: "Filosofia" },
  { id: 7, name: "Ciências Naturais" },
];

export const Filter = () => {
  const handleOrderBy = (e: string) => {
    console.log(e);
  };

  const handleFiltersBy = (e: string) => {
    console.log(e);
  };

  return (
    <ContainerFlex className="mt-4">
      <Select
        options={orderByOptions}
        icon={<BsChevronDown className="select__icon" />}
        onChange={handleOrderBy}
      />
      <Categories>
        {categories.map((option) => (
          <li key={option.id} className="pointer">
            {option.name}
          </li>
        ))}
      </Categories>
      <Select
        options={filterOptions}
        icon={<BsFilter className="select__icon" />}
        onChange={handleFiltersBy}
      />
    </ContainerFlex>
  );
};
