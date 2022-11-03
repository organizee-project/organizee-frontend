import { useRouter } from "next/router";

import { ReactElement } from "react";
import { LayoutProfile, LayoutHeader } from "components/layouts";
import { Guides } from "layouts/user";

const Page = () => {
  const router = useRouter();
  const { user } = router.query;

  return <Guides />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutHeader>
      <LayoutProfile id="0">{page}</LayoutProfile>
    </LayoutHeader>
  );
};

export default Page;
