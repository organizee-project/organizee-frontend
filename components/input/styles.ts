import styled, { css } from "styled-components";
import { OpenProps } from "styles/styles";

export const Input = styled.input`
  margin: 6px 0px;
  background: none;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Outline = styled(Input)`
  border: 0px;
  border-bottom: 1px solid #404040;
`;

export const Default = styled(Input)`
  border: 1px solid #404040;
  margin-bottom: 34px;
`;

/* addInput */

const input = css`
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const ActionInput = styled.input<{ small: string }>`
  ${input}

  width: ${({ small }) => (small ? "200px" : "calc(100% - 50px)")};
  padding: 8px 38px 8px 12px;
`;

export const Select = styled.div<OpenProps>`
  display: ${(props) => (props.open ? "block" : "none")};

  width: 280px;
  margin-top: 4px;
  padding: 2px 12px;

  border-radius: 8px;
  border: 1px solid #ededed;

  position: absolute;
  background: #fff;

  z-index: 4;

  div {
    font-size: 16px;
    line-height: 24px;

    padding: 6px 0px;
    border-bottom: 1px solid #ededed;

    &:last-child {
      border-bottom: 0px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
