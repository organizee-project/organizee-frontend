import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  height: 188px;
  width: 100%;
  text-align: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Text = styled.label`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4px;

  &.drag {
    background-color: var(--white);
  }

  button {
    background: var(--white);
    border-radius: 18px;
    text-align: center;
    padding: 6px 26px;

    border: none;
  }
`;
export const Drag = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  &:hover {
    cursor: pointer;
  }
`;

export const Preview = styled.div`
  position: relative;

  margin: 10px auto;

  width: 200px;
  height: 150px;
`;
