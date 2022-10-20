import styled, { css } from "styled-components";

export const Container = styled.div<{ paddingTop?: string; isGuide?: boolean }>`
  padding: 0px 24px;
  margin: auto;

  padding-top: ${({ paddingTop }) => paddingTop ?? "0px"};
  width: ${({ isGuide }) => (isGuide ? "1152px" : "1342px")};
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

export const Picture = styled.div<{ width: string; height: string }>`
  position: relative;
  ${({ width, height }) => `width: ${width}; height: ${height}`}
`;

export const RoundedPicture = styled(Picture)`
  img {
    border-radius: 50%;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;

  color: var(--medium-gray);

  margin-bottom: 8px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #d6d6d6;
  width: 100%;
`;

export type OpenProps = {
  open: boolean;
};
