import styled from "styled-components";

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
`;
