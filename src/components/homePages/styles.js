import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

    @media ${device.tablet} {
      display:block;
      gap:5%;
      justify-content:center;
      align-items:center;
      width:100vw;
      height:80vh;
    }
   @media ${device.mobile} {
    display:block;
    justify-content:center;
    align-items:center;
    max-height: 700px;
    width:100vw;
    height:100vh;
   }

`;
export const ContainerText = styled.div`
  height: 100%;
  width: 40%;
  align-content: stretch;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  

   @media ${device.tablet} {
    height:40%;
    width:90vw;
    margin:2% 5%;
   }

 @media ${device.mobile} {
  margin:10% 0 0;
  height:40%;
  width:100%;
  gap:2%;
  justify-content:center;
  
 }

 @media ${device.mobileMini} {
    margin:0;
  }
`;
export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
   @media ${device.mobile} {
    font-size:18px;
    max-width:80%;
   }


`;

export const ContainerIMage = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    margin:10% 50%;
    height:30%;

  }

  @media ${device.mobile}{
    margin-top:0;
    height:50%;
    

  }


`;

export const ContainerButton = styled.div`
 @media ${device.mobile} {
  display:flex;
  justify-content:center;
  justify-items:center;
  align-items:center;
  margin:0 50%;
 }

 @media ${device.mobileMini} {
  margin: 0;
  max-width:94%;
 }


`