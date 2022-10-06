import styled from "styled-components";

export const Container = styled.article`
  position: relative;
  width: 100%;
  height: 171px;

  .post__image {
    position: absolute;
    top: 0px;

    filter: brightness(45%);
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 8px;
  bottom: 21px;

  width: calc(100% - 24px);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);
`;

export const Author = styled.h3`
  position: absolute;
  left: 8px;
  bottom: 8px;

  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  color: var(--white);
`;

export const Lock = styled.h3`
  position: absolute;
  right: 8px;
  bottom: 8px;

  color: var(--white);
`;
