import { Container, Title3, Paragraph } from "styles";
import { IGuide } from "types/guide";

import { LayoutContent } from "./guideContent";
import { LayoutHeader } from "./guideHeader";

export const LayoutGuide = ({ children, guide }: IProps) => {
  return (
    <Container paddingTop="55px">
      <LayoutHeader guide={guide}> {children}</LayoutHeader>
      <LayoutContent content={guide.content} />
      <Title3>Referências</Title3>
      {guide.references.map(({ url }, i) => (
        <Paragraph key={i}>{url}</Paragraph>
      ))}
    </Container>
  );
};

interface IProps {
  children: any;
  guide: IGuide;
}
