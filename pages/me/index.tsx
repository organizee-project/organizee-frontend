import { Guide } from "layouts/guide";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Page = () => {
  return <Guide />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Page;
