import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  padding: 47px 55px 33px 55px;
  background-color: var(--white);
  top: 50%;
  right: 165px;
  max-width: 555px;
  border-radius: 30px;
  transform: translateY(-50%);
`;

export const SecondaryTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #000000;

  margin-bottom: 62px;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: var(--black);
  display: block;
`;

export const Required = styled.span`
  font-weight: 400;
  font-size: 8px;
  line-height: 12px;

  color: #000000;
`;

export const Wrapper = styled.div`
  margin-bottom: 34px;
`;
