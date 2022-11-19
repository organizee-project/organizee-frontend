import styled from "styled-components";
import { OpenDiv } from "styles";

export const Modal = styled.div`
  position: relative;
  width: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 30px 18px;
  background: #f7f7f7;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

export const Background = styled(OpenDiv)`
  z-index: 9999;
  display: ${({ open }) => (open ? "block" : "none")}};
  background-color: rgba(0, 0, 0, 0.7);
`;
