import styled, { css } from "styled-components";
import { space, layout, LayoutProps, SpaceProps } from "styled-system";

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

export const Button = styled.button<ButtonProps>`
  display: block;

  padding: 6px 12px;
  margin: 6px auto;

  border: 0px;
  border-radius: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);

  :hover {
    cursor: pointer;
  }

  ${layout}
  ${space}
  ${({ variant }) => variantStyles(variant)}
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

type ButtonProps = LayoutProps &
  SpaceProps & {
    variant: string;
  };
