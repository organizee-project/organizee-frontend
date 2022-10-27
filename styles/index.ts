import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  typography,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  TypographyProps,
} from "styled-system";

export const Container = styled.div<ContainerProps>`
  padding: 0px 24px;
  margin: auto;
  width: ${({ isGuide }) => (isGuide ? "1152px" : "1342px")};

  ${layout}
  ${space}
  ${flexbox}
`;

export const Flex = styled.div<GenericProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  ${layout}
  ${space}
  ${flexbox}
`;

export const Title = styled.h1<ColorProps>`
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

export const Picture = styled.div<LayoutProps>`
  position: relative;
  ${layout}
`;

export const RoundedPicture = styled(Picture)`
  img {
    border-radius: 50%;
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 16px;
  line-height: 24px;

  color: var(--medium-gray);
  margin-bottom: 8px;

  ${layout}
  ${space}
  ${flexbox}
  ${typography}
  ${color}
`;

export const Divider = styled.div`
  border-bottom: 1px solid #d6d6d6;
  width: 100%;
`;

export type GenericProps = SpaceProps & FlexboxProps & LayoutProps;

export type OpenProps = {
  open: boolean;
};

type ContainerProps = GenericProps & {
  isGuide?: boolean;
};

type ParagraphProps = TypographyProps & ColorProps & GenericProps;
