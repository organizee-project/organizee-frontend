import { Button as StyledButton } from "./styles";

export const Button = ({ variant = "default", children, ...props }) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);
