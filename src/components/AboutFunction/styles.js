import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 50px 45% 20px 45%;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);

  @media ${device.tablet} {
    margin: 15% 40% 5%;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin: 5% 35% auto;
  }
`;

export const Presentation = styled.p`
  font-size: 25px;
  justify-content: center;
  justify-items: center;
  text-align: center;
  max-width: 700px;
  margin: 50px auto;
  margin-bottom: 100px;

  @media ${device.tablet} {
    max-width: 90%;
  }

  @media ${device.mobile} {
    font-size: 20px;
    max-width: 400px;
    margin-bottom: 20px;
  }

  @media ${device.mobileMini} {
    max-width: 300px;
    margin-bottom: 5%;
  }
`;

export const ContainerTexts = styled.div`
  align-items: center;
  justify-content: center;
`;
