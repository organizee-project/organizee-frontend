import { EText } from "common/types/post";
import { Paragraph } from "styles";
import { Title, Author } from "./styles";

export const Text = ({ type, children, hide }: IProps) => {
  if (hide) return <></>;

  if (type === EText.title) return <Title>{children}</Title>;
  if (type === EText.author) return <Author>{children}</Author>;
  if (type === EText.paragraph) return <Paragraph>{children}</Paragraph>;

  return <Paragraph>{children}</Paragraph>;
};

interface IProps {
  type: EText;
  level?: number;
  children: any;
  hide?: boolean;
}
