import styled, { css } from "styled-components";

const variantStyles = (variant = "default") =>
  ({
    default: css`
      background-color: var(--light-blue);
    `,
    pink: css`
      background-color: var(--pink);
    `,
    blue: css`
      background-color: var(--blue);
    `,
    disabled: css`
      background-color: var(--lighter-gray);
    `,
  }[variant]);

export const Button = styled.button<PropsTypes>`
  display: block;
  width: ${({ width }) => width ?? "100%"};

  padding: 6px 0px;
  margin: 6px auto;

  border: 0px;
  border-radius: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);

  ${({ variant }) => variantStyles(variant)}

  :hover {
    cursor: pointer;
  }
`;

export const Add = styled.button`
  padding: 10px;
  margin: 26px auto;

  background-color: var(--blue);
  border-radius: 50%;

  border: 0;
  line-height: 0;
  display: block;

  :hover {
    cursor: pointer;
  }
`;

interface PropsTypes {
  variant: string;
  width?: string;
}
