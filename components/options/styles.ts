import styled from "styled-components";
import { OpenProps } from "styles";

export const Container = styled.div<OpenProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  width: 223px;

  right: -5px;

  position: absolute;
  padding: 2px 12px;

  background: #ffffff;
  border-radius: 18px;

  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.13));

  &:after {
    content: " ";
    position: absolute;

    right: 6px;
    top: -9px;

    width: 0;
    height: 0;

    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 13px solid #ffffff;
    border-radius: 18px;
  }
`;

export const Item = styled.div`
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
`;

export const Divider = styled.div``;
