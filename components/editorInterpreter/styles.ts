import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  color: var(--black);
`;

export const Author = styled.p`
  font-size: 12px;
  line-height: 18px;

  color: var(--black);
`;

export const Header1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;

  color: var(--medium-gray);
`;

export const Header2 = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;

  color: var(--medium-gray);
`;

export const Header3 = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: var(--medium-gray);
`;

export const Header4 = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  color: var(--medium-gray);
`;

export const StyledQuote = styled.p`
  margin: 20px 0px 20px 30px;
  padding-left: 10px;

  border-left: #d9d9d9 solid 6px;

  color: var(--medium-gray);
`;

export const StyledCode = styled.p`
  margin: 4px 0px 20px 0px;
  padding: 10px;
  color: #d9d9d9;

  width: 100%;
  background-color: var(--gray);

  border-radius: 6px;

  span {
    display: block;
    margin-bottom: 8px;

    font-size: 10px;
  }
`;

export const StyledToogle = styled.div`
  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
  }

  p {
    padding-left: 30px;
  }
`;

const heading = css`
  tr:first-child {
    font-weight: bold;
  }
`;

export const StyledTable = styled.table<TableProps>`
  width: 100%;
  margin-top: 16px;
  border-spacing: 0;

  ${({ withHeadings }) => withHeadings && heading}

  tr td:last-child {
    border-right: 0px;
    border-bottom: 1px solid var(--medium-white);
  }

  td {
    border-right: 1px solid var(--medium-white);
    border-top: 1px solid var(--medium-white);
    padding: 6px 12px;
  }
`;

interface TableProps {
  withHeadings: boolean;
}
