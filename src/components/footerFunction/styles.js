import styled from "styled-components";
import {device} from "../../styles/breakpoints"

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:20px;
background:rgba(0, 255, 194, 0.5);
  
 @media ${device.mobile} {
    margin-top:20% ;
     height:10%;
     justify-content:center;
     align-items:center;
     gap:0;

}

  `

export const Text = styled.p`
color:#000;
font-size:18px;

  @media ${device.mobile} {
    
    text-align:center;
   
    
  }

`
