import styled, { css } from "styled-components";
import { OpenProps } from "styles";

export const ContainerEdit = styled.div<OpenProps>`
  width: 1106px;

  padding: 0px 39px;
  margin: 140px auto 0px auto;

  background-color: #fff;

  display: ${({ open }) => (open ? "grid" : "none")}};
  grid-template-areas:
    "title private buttons"
    "tags topics topics"
    "img img img"
    "refs refs refs"
    "editor editor editor";

  grid-template-columns: 1fr 1fr;

  column-gap: 24px;

  .cdx-quote-settings{display: none;}
`;

export const Area = styled.div<{ area: string; big?: boolean }>`
  grid-area: ${({ area }) => area};
  position: relative;
  margin-bottom: 24px;

  span.add {
    color: var(--light-pink);

    border-left: 1px solid #e0e0e0;

    position: absolute;
    left: ${({ big }) => (big ? "calc(100% - 30px)" : "220px")};
    top: 28px;

    padding: 0px 6px;
    font-size: 26px;
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

export const Open = styled.div<OpenProps>`
display: ${({ open }) => (open ? "block" : "none")}};
`;
