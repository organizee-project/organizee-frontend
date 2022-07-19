import { Button as StyledButton } from "./styles";

export const Button = ({ variant = "default", children }: PropTypes) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);

interface PropTypes {
  variant: string;
  children: string;
}
