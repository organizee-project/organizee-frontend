import GuideTemplate from "layouts/guide";
import { ReactElement } from "react";
import { HeaderLayout } from "components/layouts";

const Guide = () => {
  return <GuideTemplate />;
};

Guide.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Guide;
