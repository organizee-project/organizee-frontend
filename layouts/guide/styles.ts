import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  background-color: #eeeeee;
  padding: 25px 0px;
`;
export const Button = styled.div`
  width: 34px;
  height: 34px;

  position: relative;

  top: calc(50% - 34px);
  left: 0px;
  text-align: center;
  color: white;
  font-size: 23px;
  line-height: 34px;

  border-radius: 50%;
  background-color: var(--light-blue);

  &:hover {
    cursor: pointer;
  }

  user-select: none;
  padding: 8px;
`;
