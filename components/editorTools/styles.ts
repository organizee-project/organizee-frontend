import styled from "styled-components";

export const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  padding-left: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

export const Description = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? "none" : "block")};
  padding-left: 21px;

  &:focus {
    outline: none;
  }
`;
