import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const Header = styled.div`
width: 100%;
height:70px;
display: flex;
align-items: center;
justify-content:flex-start;
gap:30px;
text-shadow:2px 2px 2px 2px rgba(0, 255, 194, 0.6);


@media ${device.mobile} {
    justify-content: space-between;
    width:100%;
    margin-bottom:0;
}

`
export const ImgLogo = styled.img`
width: 90px;
height:80%;
margin-left: 20px;

@media ${device.mobile} {
    margin:auto 40% auto 0;
}


`
export const Link = styled.a`
font-size:22px;
font-weight:bold;
color:rgba(0, 255, 194, 1);
text-shadow: 5px 5px 5px rgba(28, 31, 38, 0.6);
cursor: pointer;
text-decoration: none;
position: relative;
&:hover{
    opacity: 0.5;
}



&.active::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: rgba(0, 255, 194, 1);
    width: 100%;
    animation: underlineSlide 1.5s ease-in-out infinite;

}
@keyframes underlineSlide {
    0% {
       transform: scaleX(0);
       transform-origin: left;
    }
    50% {
        transform: scaleX(1);
        transform-origin: left;
    }

    51% {
        transform-origin: right ;
    }
       
    100% {
       transform: scaleX(0);
       transform-origin:right;
    }
}

@media ${device.mobile} {
    font-size:16px;
}
`

 export const LinksContainer = styled.nav`
display:flex;
gap:20px;

@media ${device.mobile} {
position:absolute;
width:30%;
top:60px;
left:5px;
flex-direction:column;
border-radius:8px;
display: ${({ open }) => (open ? "flex" : "none")};
z-index:10;
} 
`

export const Hamburger = styled.div`
display: none;
margin-left:10px;
flex-direction: column-reverse;
gap:5px;
cursor: pointer;


@media ${device.mobile} {
    display:flex;
}

div{
    width:25px;
    height:4px;
    background: #00ffc2;
    border-radius:2px;
}
`