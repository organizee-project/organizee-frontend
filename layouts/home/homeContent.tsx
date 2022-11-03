import { useState } from "react";
import { Container } from "styles";
import { Filter } from "./homeContentFilter";
import { Guides } from "./homeContentGuides";

export const HomeContent = () => {
  const [sort, setSort] = useState("popularity");

  const handleSortBy = (category: string) => {
    setSort(category);
  };

  return (
    <>
      <Filter handleSortBy={handleSortBy} />
      <Container>
        <Guides sortBy={sort} />
      </Container>
    </>
  );
};
