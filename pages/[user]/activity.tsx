import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";

const Page = () => {
  return <></>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile id="0">{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
