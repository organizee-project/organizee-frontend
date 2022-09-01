import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1106px;

  padding: 55px 39px;
  margin: 150px auto 0px auto;

  background-color: #fff;

  display: grid;
  grid-template-areas:
    "title buttons"
    "tags topics"
    "editor editor";

  grid-template-columns: 1fr 1fr;

  column-gap: 24px;
`;

export const Area = styled.div<{ area: string }>`
  grid-area: ${(props) => props.area};
  position: relative;
  margin-bottom: 24px;

  span.add {
    color: var(--light-pink);

    border-left: 1px solid #e0e0e0;

    position: absolute;
    left: 220px;
    padding: 8px;
  }

  span:hover {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: block;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-bottom: 4px;
`;

const input = css`
  font-size: 14px;
  line-height: 21px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const Input = styled.input`
  ${input}

  width: calc(540px - 24px);
  padding: 8px 12px;
`;

export const Selected = styled.div`
  padding: 12px;
  min-height: 68px;
  margin-top: 8px;
`;

export const Item = styled.div`
  display: flex;
  gap: 8px;

  background-color: var(--light-pink);

  font-size: 14px;
  line-height: 21px;

  color: #ffffff;

  padding: 8px 12px;
  border-radius: 8px;
  margin: 6px 6px 6px 0px;

  &:hover {
    cursor: pointer;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Editor = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 40px 12px 60px;

  min-height: 300px;

  * {
    max-width: 100%;
    margin: 0px;
  }
`;
