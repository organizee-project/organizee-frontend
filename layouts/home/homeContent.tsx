import { useState } from "react";
import { Container } from "styles";
import { Filter } from "./homeContentFilter";
import { Guides } from "./homeContentGuides";

export const HomeContent = () => {
  const [sort, setSort] = useState("popularity");
  const [category, setCategory] = useState("");

  const handleSortBy = (sort: string) => {
    setSort(sort);
  };

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <Filter handleSortBy={handleSortBy} handleCategory={handleCategory} />
      <Container>
        <Guides sortBy={sort} category={category} />
      </Container>
    </>
  );
};
