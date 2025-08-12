import styled from "styled-components";
import { device } from "../../styles/breakpoints";




export const ImageAvatar = styled.img`
 width:400px;
 height: auto;
 cursor:pointer;

 @media ${device.mobile} {
    width:310px;
 }
`