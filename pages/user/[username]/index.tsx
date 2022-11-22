import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";
import { Guides } from "layouts/user";

const Page = () => {
  return <Guides />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile>{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
