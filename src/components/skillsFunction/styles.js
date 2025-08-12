import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
 width:100vw;
 height:70vh;
`
export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
  margin: 0 35% 1px 42%;

  @media ${device.tablet} {
    margin:10% 30%;
  }

  @media ${device.mobile} {
    margin:10% 10% 10% 18%;
  }

  @media ${device.mobileMini} {
    font-size:28px;
    margin:15% 12%;
  }
`;

export const SectionTechnicalSkills = styled.ul`
  margin: 2% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media ${device.tablet}{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }

@media ${device.mobile} {
  grid-template-columns:80%;
  margin: 2% 0;
  
}

  li {
    height: 250px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    border: 2px solid #00ffc2;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-shadow: 3px 3px 3px rgba(0, 255, 194, 0.7);

    @media ${device.tablet} {
      height:300px;
    }

    @media ${device.mobile}{
      height:400px;
      font-size:22px;
    }

    img {
      margin: 10px 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 3px 3px rgba(0, 255, 194, 0.6);
    }
    img:hover {
      opacity: 0.9;
      box-shadow: none;
      transform: scale(1.5);
      transition: 0.5s;
    }

    h3 {
      margin-bottom: 10px;
    }
  }
  li:hover {
    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
    transform: scale(1.1);
    transition: 0.5s;
  }

  button{
    width:100px;

  }
`;

export const DivButton = styled.div `
display:flex;
gap :20px;
justify-content:center;
align-items: center;
`

export const Img = styled.img`
width:80px;

`
