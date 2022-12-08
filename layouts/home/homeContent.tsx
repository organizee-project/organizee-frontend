import { AuthContext } from "contexts/auth";
import { useContext, useEffect, useState } from "react";
import { Container } from "styles";
import { Filter } from "./homeContentFilter";
import { Guides } from "./homeContentGuides";

export const HomeContent = () => {
  const { user } = useContext(AuthContext);

  const [sort, setSort] = useState("popularity");
  const [category, setCategory] = useState("");

  const handleSortBy = (sort: string) => {
    setSort(sort);
  };

  const handleCategory = (selected: string) => {
    if (category === selected) setCategory("");
    else setCategory(selected);
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
