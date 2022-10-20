import styled from "styled-components";
import { LayoutProps } from "styled-system";

export const Container = styled.div<LayoutProps>`
  width: 100%;
  padding: 18px;
  background: #f7f7f7;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin: 24px auto;
`;

export const TextArea = styled.textarea`
  border-width: 0px;
  resize: none;
  width: 100%;
  background-color: #f7f7f7;
  min-height: 48px;
`;
