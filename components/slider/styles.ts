import styled from "styled-components";

export const Container = styled.div<SliderProps>`
  overflow: hidden;
  max-width: ${({ maxWidth }) => maxWidth};

  position: relative;
  user-select: none;
`;

export const Inner = styled.div<InnerProps>`
  white-space: nowrap;
  transition: transform 0.3s;
  width: ${({ width }) => width};

  ${({ right }) => `transform: translate(${right}px);`}

  & > * {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
  }
`;

export const Button = styled.div<ButtonProps>`
  position: absolute;

  top: 0px;
  ${({ left }) => (left ? "left: 0px" : "right: 0px;")};

  z-index: 1;
  height: 100%;
`;

type SliderProps = {
  maxWidth: string;
};

type InnerProps = {
  right: number;
  width: string;
};

type ButtonProps = {
  left?: boolean;
};
