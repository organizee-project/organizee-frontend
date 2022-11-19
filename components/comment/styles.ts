import styled from "styled-components";
import { space, layout } from "styled-system";
import { GenericProps } from "styles";

export const Container = styled.div<GenericProps>`
  width: calc(100% - 36px);
  padding: 18px;
  background: #f7f7f7;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin: 24px auto;

  ${space}
  ${layout}
`;

export const TextArea = styled.textarea`
  border-width: 0px;
  resize: none;
  width: 100%;
  background-color: #f7f7f7;
  min-height: 48px;
`;
