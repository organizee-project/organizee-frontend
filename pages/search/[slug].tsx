import { Search } from "layouts/search";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Page = () => {
  return <Search />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Page;
