import styled, { css } from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  padding: 40px 0px;

  background: url("/images/bannerBg.svg");
  background-position-x: calc(100% + 100px);
  background-position-y: center;
  background-repeat: no-repeat;
`;

export const TextWrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  color: var(--black);
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 43px 40px;

  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Categories = styled.ul`
  overflow: hidden

  list-style-type: none;

  li {
    display: inline-flex;
    
    font-weight: 400;
    font-size: 16px;
    line-height: 31px;

    color: #101010;
  }
`;

const button = css`
  top: 50%;
  text-align: center;
  color: black;
  font-size: 23px;
  font-weight: bold;
  line-height: 25px;

  &:hover {
    cursor: pointer;
  }

  user-select: none;
`;

export const RightButton = styled.div`
  ${button}

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.76) -57.78%,
    rgba(255, 255, 255, 0.578125) -6.7%,
    rgba(255, 255, 255, 1) 50%
  );
  padding-left: 8px;
`;

export const LeftButton = styled.div`
  ${button}

  background: linear-gradient(
  270deg,
  rgba(255, 255, 255, 0.76) -57.78%,
  rgba(255, 255, 255, 0.578125) -6.7%,
  rgba(255, 255, 255, 1) 50%
);
  padding-right: 8px;
`;
