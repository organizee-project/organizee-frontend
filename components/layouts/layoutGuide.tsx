import { Container } from "styles/styles";

import { LayoutContent } from "./layoutGuideContent";
import { LayoutHeader } from "./layoutGuideHeader";

export const LayoutGuide = ({ children, guide }) => {
  return (
    <Container paddingTop="55px" isGuide={true}>
      <LayoutHeader guide={guide}> {children}</LayoutHeader>
      <LayoutContent content={guide.content} />
    </Container>
  );
};
