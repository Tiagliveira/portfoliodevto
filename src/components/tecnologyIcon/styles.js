import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
  margin: 10% 50% 5% 45%;

  @media ${device.tablet} {
    margin: 10% 40% 5%;
  }

  @media ${device.mobile} {
    margin: 20% 30% 13%;
  }
`;

export const ContainerIcon = styled.ul`
  display: flex;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 200px);
  gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 200px);
    gap: 20px;
  }

  @media ${device.mobile} {
    display: flex;
  }

  .box-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .box-text {
    background: linear-gradient(
      0deg,
      rgba(0, 255, 194, 0.8) 35%,
      rgba(28, 31, 38, 0.8) 90%
    );
    border-radius: 10px;
    border: 2px solid #1c1f26;
  }

  P {
    width: 100%;
    font-size: 18px;
    height: 100%;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(28, 31, 38, 0.8);
    text-align: center;
    align-content: center;
  }

  li:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
  }
`;
export const ContainerImageIcon = styled.div`
  margin: 20px;
  width: 90px;
  height: 90px;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 194, 1) 21%,
    rgba(28, 31, 38, 1) 77%
  );
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
