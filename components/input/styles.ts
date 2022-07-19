import styled from "styled-components";

const Input = styled.input`
  margin: 6px 0px 34px 0px;
  background: none;
  width: 100%;

  font-family: "Poppins";
  font-style: normal;
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

export const Label = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: var(--black);
  display: block;
`;
