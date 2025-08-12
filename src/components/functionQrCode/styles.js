import styled from "styled-components";
import {device} from "../../styles/breakpoints"

export const Container = styled.div``;

export const ButttoMobile = styled.button`
  background:transparent;
  color: white;
  border: 2px #ffff;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  color:#000;

  &:hover {
    opacity: 0.5;
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
  }

  img {
    width: 50px;
    height: 50px;
  }

  @media ${device.mobile} {
 display:none;
  }
`;

export const ButtonQrCode = styled.button`
  margin-top: 15px;
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
