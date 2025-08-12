import styled from "styled-components";
import { device } from "../../styles/breakpoints";


import Background from "../../assets/backgroud.jpg"
import BackgroundTablet from "../../assets/backgroundLaptop.png"
import BackgroundMobile from "../../assets/backgroundMolile.png"


export const ContainerBackground = styled.div`
width:100%;
min-height:100vh;

background-image:
radial-gradient(
    circle,
    rgba(0, 255, 194, 0.6) 0%,
    rgba(28, 31, 38, 1) 70%
  ),
  url(${Background});
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;

  @media ${device.tablet} {
    background-image:
    radial-gradient(
    circle,
    rgba(0, 255, 194, 0.6) 0%,
    rgba(28, 31, 38, 1) 70%
  ),
  url(${BackgroundTablet});
  }

@media ${device.mobile} {
  background-image:
    radial-gradient(
    circle,
    rgba(0, 255, 194, 0.6) 0%,
    rgba(28, 31, 38, 1) 70%
  ),
  url(${BackgroundMobile});
  }

`