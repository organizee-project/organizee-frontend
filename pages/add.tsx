import { AddGuide } from "layouts/add";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";
import { AdminStyle } from "styles/global";

const Page = () => {
  return (
    <>
      <AdminStyle />
      <AddGuide />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Page;
