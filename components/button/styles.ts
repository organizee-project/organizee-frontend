import styled from "styled-components";

export const Button = styled.button<PropsTypes>`
  display: block;
  width: 100%;

  padding: 6px 0px;
  margin: 6px auto;

  background-color: ${(props) =>
    props.variant === "pink" ? "var(--pink)" : "var(--light-blue)"};
  border: 0px;
  border-radius: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);

  :hover {
    cursor: pointer;
  }
`;

interface PropsTypes {
  variant: string;
}
