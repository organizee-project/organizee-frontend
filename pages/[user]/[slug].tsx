import GuideTemplate from "layouts/guide";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Guide = () => {
  return <GuideTemplate />;
};

Guide.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Guide;
