import styled from "styled-components";
import { Container } from "styles/styles";
import { Input as Default } from "components/input/styles";

export const StyledHeader = styled.header`
  position: fixed;
  background-color: var(--pink);
  padding: 24px 0px 15px 0px;
  width: 100%;
  top: 0px;

  z-index 100;
`;

export const Input = styled(Default)`
  width: 800px;
  margin: 0px 0px 12px;
  padding: 5px 14px;

  background-color: #fff;

  border: 0px solid;
  border-radius: 20px;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
  margin-left: 12px;
  padding: 8px;
  background-color: var(--light-white);

  border: 0px;
  border-radius: 50%;

  color: var(--light-gray);
  font-size: 0px;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

export const LinkText = styled.span<Link>`
  margin: 6px;
  padding: 4px 16px;
  background-color: ${(props) =>
    props.active ? "var(--light-blue)" : "transparent"};

  border-radius: 20px;

  color: ${(props) => (props.active ? "#fff" : "var(--white)")};
  font-size: 16px;
  line-height: 24px;

  :hover {
    cursor: pointer;
  }
`;

type Link = {
  active?: boolean;
};
