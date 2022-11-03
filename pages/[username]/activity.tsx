import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";
import { Activitys } from "layouts/user";

const Page = () => {
  return <Activitys />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile>{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
