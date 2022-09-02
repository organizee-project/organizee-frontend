import AddGuideTemplate from "layouts/addGuide";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Guide = () => {
  return <AddGuideTemplate />;
};

Guide.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Guide;
