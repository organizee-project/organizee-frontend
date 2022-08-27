import { Header1, Header2, Header3, Header4, Paragraph } from "./styles";

export const Header = ({ level, children }: IProps) => {
  if (level === 1) return <Header1>{children}</Header1>;
  if (level === 2) return <Header2>{children}</Header2>;
  if (level === 3) return <Header3>{children}</Header3>;
  if (level == 4) return <Header4>{children}</Header4>;

  return <Paragraph>{children}</Paragraph>;
};

interface IProps {
  level: number;
  children: any;
}
