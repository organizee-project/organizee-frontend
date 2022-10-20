import styled, { css } from "styled-components";

import { Container } from "styles";

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

const button = css`
  top: 50%;
  text-align: center;
  color: black;
  font-size: 23px;
  font-weight: bold;
  line-height: 25px;

  &:hover {
    cursor: pointer;
  }

  user-select: none;
`;

const RightButton = styled.div`
  ${button}

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.76) -57.78%,
    rgba(255, 255, 255, 0.578125) -6.7%,
    rgba(255, 255, 255, 1) 50%
  );
  padding-left: 8px;
`;
const LeftButton = styled.div`
  ${button}

  background: linear-gradient(
  270deg,
  rgba(255, 255, 255, 0.76) -57.78%,
  rgba(255, 255, 255, 0.578125) -6.7%,
  rgba(255, 255, 255, 1) 50%
);
  padding-right: 8px;
`;

export const Filter = () => {
  const handleOrderBy = (e: string) => {
    console.log(e);
  };

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
    </Container>
  );
};
