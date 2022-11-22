import { UserContext } from "contexts/user";
import { useContext, useEffect, useState } from "react";
import { Container } from "styles";
import { Filter } from "./homeContentFilter";
import { Guides } from "./homeContentGuides";

export const HomeContent = () => {
  const { user } = useContext(UserContext);

  const [sort, setSort] = useState("popularity");
  const [category, setCategory] = useState("");

  const handleSortBy = (sort: string) => {
    setSort(sort);
  };

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    if (!user) setCategory("");
  }, [user]);

  return (
    <>
      <Filter
        handleSortBy={handleSortBy}
        handleCategory={handleCategory}
        category={category}
      />
      <Container>
        <Guides sortBy={sort} category={category} />
      </Container>
    </>
  );
};
