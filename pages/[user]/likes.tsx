import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";
import { Likes } from "layouts/user";

const Page = () => {
  return <Likes />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile id="0">{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
