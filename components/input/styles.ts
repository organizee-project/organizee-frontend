import styled from "styled-components";

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
