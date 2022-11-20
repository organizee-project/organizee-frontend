import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";
import { Saved } from "layouts/user";

const Page = () => {
  return <Saved />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile>{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
