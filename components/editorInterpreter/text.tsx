import { EText } from "types/post";
import { Paragraph } from "styles";
import { Title, Author } from "./styles";
import parse from "html-react-parser";

export const Text = ({ type, children, hide }: IProps) => {
  if (hide) return <></>;

  if (type === EText.title) return <Title>{children}</Title>;
  if (type === EText.author) return <Author>{children}</Author>;
  if (type === EText.paragraph) return <Paragraph>{parse(children)}</Paragraph>;

  return <Paragraph>{children}</Paragraph>;
};

interface IProps {
  type: EText;
  level?: number;
  children: string;
  hide?: boolean;
}
