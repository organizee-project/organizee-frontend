import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1342px;
  padding: 0px 24px;
  margin: auto;
`;

const flex = css`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const Flex = styled.div<{ width?: string }>`
  ${flex}
  align-content: center;

  width: ${(props) => props.width ?? "auto"};
`;

export const ContainerFlex = styled(Container)`
  ${flex}
`;

export const Title = styled.h1<Title>`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;

  color: var(--${(props) => props.color});
`;

type Title = {
  color: string;
};
