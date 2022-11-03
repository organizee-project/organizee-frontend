import styled from "styled-components";
import { layout, color, ColorProps, LayoutProps } from "styled-system";

type Props = ColorProps | LayoutProps;

export const Container = styled.article<Props>`
  position: relative;
  width: 100%;
  height: 171px;

  .post__image {
    position: absolute;
    top: 0px;

    filter: brightness(45%);
  }

  ${layout}
  ${color}
`;

export const Title = styled.h2<Props>`
  position: absolute;
  left: 8px;
  bottom: 21px;

  width: calc(100% - 24px);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);

  ${layout}
  ${color}
`;

export const Author = styled.h3<Props>`
  position: absolute;
  left: 8px;
  bottom: 8px;

  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  color: var(--white);

  ${layout}
  ${color}
`;

export const Lock = styled.h3<Props>`
  position: absolute;
  right: 8px;
  bottom: 8px;

  color: var(--white);

  ${layout}
  ${color}
`;
