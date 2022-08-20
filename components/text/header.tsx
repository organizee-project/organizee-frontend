import { Header1, Header2, Header3, Header4, Header5, Header6 } from "./styles";

export const Header = ({ level, children }: IProps) => {
  if (level === 1) return <Header1>{children}</Header1>;
  if (level === 2) return <Header2>{children}</Header2>;
  if (level === 3) return <Header3>{children}</Header3>;
  if (level == 4) return <Header4>{children}</Header4>;
  if (level == 5) return <Header5>{children}</Header5>;

  return <Header6>{children}</Header6>;
};

interface IProps {
  level: number;
  children: any;
}
