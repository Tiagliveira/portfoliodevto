import styled from "styled-components"
import { device } from "../../styles/breakpoints"


export const Img = styled.img `
 width: 300px;
        height:auto;
        margin:10px auto 0;
        border-radius: 8px;
        box-shadow:0px 0px 5px 5px rgba(0, 255, 194, 0.6);
        transition: transform 0.5s ,opacity 0.30s ease-in-out;

@media ${device.mobile} {
    width:250px;
    margin: 2% auto 1%;

}

`