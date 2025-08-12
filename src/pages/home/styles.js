import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const DivScroll = styled.div`
  overflow-y: scroll;
  height: 90vh;

  @media ${device.mobile} {
    height:90vh;
  }

  
`;
export const Avatar = styled.img`
  height: auto;
  width: 400px;
  transition-delay: 0.5s;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));

  @media ${device.mobile} {
    width: 10px;
    height: 10px;
  }
`;
export const ImageAvatar = styled.img`
  transition: 100s ease-in-out;
`;

export const SectionHome = styled.section`
  height: 100vh;

  @media ${device.tablet} {
    height:85vh;
  }

  @media ${device.mobile} {
    height: 75vh;
  }
`;

export const SectionProjects = styled.section`
width: 100%; 
height: 100%;

@media ${device.tablet} {
  height:80vh;
}


@media ${device.mobile } {
  height:80vh;

}
`

export const SectionContact = styled.section`
width: 100%;
 height: 100%;

 @media ${device.mobile} {

  height:95%;
 }
 ;
`

export const SectionFooter = styled.section`
width:100vw;
height:10vh;

@media ${device.mobile} {
  height:10%;
}
`

export const SectionAbout = styled.section`

@media ${device.tablet} {
height:80vh;

}
`