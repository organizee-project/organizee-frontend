import styled, { css } from "styled-components";

export const Container = styled.div<{ paddingTop?: string }>`
  width: 1342px;
  padding: 0px 24px;
  margin: auto;

  padding-top: ${(props) => props.paddingTop ?? "0px"};
`;

const flex = css`
  display: flex;
  flex-wrap: wrap;
`;

export const Flex = styled.div<{ width?: string; justify?: string }>`
  ${flex}
  align-content: center;

  width: ${({ width }) => width ?? "auto"};
  justify-content: ${({ justify }) => justify ?? "space-between"};
`;

export const ContainerFlex = styled(Container)`
  ${flex}
  justify-content: space-between;
`;

export const Title = styled.h1<Title>`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;

  color: var(--${(props) => props.color});
`;

export const OpenDiv = styled.div<OpenProps>`
  display: ${(props) => (props.open ? "block" : "none")};

  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
`;

type Title = {
  color: string;
};

export type OpenProps = {
  open: boolean;
};
