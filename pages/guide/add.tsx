import AddGuideTemplate from "layouts/addGuide";
import { ReactElement } from "react";
import { HeaderLayout } from "components/layouts";

const Guide = () => {
  return <AddGuideTemplate />;
};

Guide.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Guide;
