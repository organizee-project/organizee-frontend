import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .select__icon {
    position: absolute;
    right: 10px;
    top: 10px;

    font-size: 18px;
    color: #fff;
  }
`;

export const SelectContainer = styled.select`
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: none;
  border-radius: 20px;
  padding: 8px 28px 8px 16px;

  background-color: var(--light-blue);

  font-size: 16px;
  line-height: 19px;
  color: #fff;
`;
