import { EText } from "common/types/post";
import { Header } from "./header";
import { Title, Author, Paragraph } from "./styles";

export const Text = ({ type, level, children }: IProps) => {
  if (type === EText.title) return <Title>{children}</Title>;
  if (type === EText.author) return <Author>{children}</Author>;
  if (type === EText.paragraph) return <Paragraph>{children}</Paragraph>;
  if (type === EText.header) return <Header level={level}>{children}</Header>;

  return <Paragraph>{children}</Paragraph>;
};

interface IProps {
  type: EText;
  level?: number;
  children: any;
}
