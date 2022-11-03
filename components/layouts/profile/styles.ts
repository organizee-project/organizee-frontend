import styled from "styled-components";
import { Flex } from "styles";

export const InfoContainer = styled.div`
  max-width: 284px;
  margin-right: 126px;
`;

export const ButtonContainer = styled(Flex)`
  align-items: center;

  button {
    margin: 6px 0px;
  }
`;

type Active = {
  active?: boolean;
};

export const Item = styled.li<Active>`
  display: inline-block;
  font-size: 24px;
  line-height: 36px;
  margin-right: 22px;

  color: var(--secondary-gray);

  ${({ active }) =>
    active && `color: black; border-bottom: 1px solid var(--pink)`};

  &:hover {
    cursor: pointer;
  }
`;
