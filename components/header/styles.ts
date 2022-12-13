import styled from "styled-components";
import { Input as Default } from "components/input/styles";

export const StyledHeader = styled.header`
  position: fixed;
  background-color: var(--pink);
  padding: 24px 8px 15px 8px;
  width: calc(100% - 16px);
  top: 0px;

  z-index 100;

  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Default)`
  width: 800px !important;
  margin: 0px 0px 12px !important;
  padding: 5px 14px !important;

  background-color: #fff !important;

  border: 0px solid !important;
  border-radius: 20px !important;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15) !important;
`;

export const ContainerOptions = styled.div`
  background-color: #fff;

  border: 0px solid;
  border-radius: 8px;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 800px;
  margin-top: -8px;

  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 5px 14px;
  }

  div:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  padding: 8px;
  background-color: var(--medium-white);

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

export const Form = styled.form`
  position: relative;
`;

type Link = {
  active?: boolean;
};
