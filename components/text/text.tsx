import { EText } from "common/types/post";
import { Title, Author } from "./styles";

export const Text = ({ type, children }: IProps) => {
  if (type === EText.title) return <Title>{children}</Title>;
  if (type == EText.author) return <Author>{children}</Author>;
};

interface IProps {
  type: EText;
  children: any;
}
