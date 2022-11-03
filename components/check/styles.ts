import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  border: 1px solid #e0e0e0;
  border-radius: 21px;
  padding: 6px 28px 6px 38px;
  position: relative;
  margin-right: 6px;

  ${({ active }) =>
    active
      ? `color: var(--white); background-color: var(--light-pink);`
      : `color: #e0e0e0;`}

  &:before {
    position: absolute;

    content: " ";
    border-radius: 50%;
    height: 19px;
    width: 19px;

    ${({ active }) =>
      active
        ? `border: 2px solid var(--white); background-color: var(--pink);`
        : `border: 1px solid #e0e0e0;`}
    left: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

//   ${(props) => (props.active ? "var(--light-blue)" : "transparent")};
