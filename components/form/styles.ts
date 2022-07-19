import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  padding: 47px 55px;
  background-color: var(--white);
  top: 50%;
  right: 165px;
  max-width: 555px;
  border-radius: 30px;
  transform: translateY(-50%);
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;

  color: var(--gray);
`;

export const SecondaryTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #000000;

  margin-bottom: 62px;
`;
