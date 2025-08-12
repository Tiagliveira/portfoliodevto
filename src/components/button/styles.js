import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Button = styled.button`
  font-size: 30px;
  font-weight: 600;
  width: 150px;
  background-color: rgba(0, 255, 194, 1);
  color: #1c1f26;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 2px #1c1f26;
  margin: 10px;
  cursor: pointer;
  outline: none;
  text-decoration: underline none;

  &:hover{
    opacity:0.7;
  }

  @media ${device.mobile} {
    width: 100px;
    margin: 3px;
    font-size: 18px;
  }
`;

