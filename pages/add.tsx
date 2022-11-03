import { AddGuide } from "layouts/add";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Page = () => {
  return (
    <>
      <AddGuide />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Page;
