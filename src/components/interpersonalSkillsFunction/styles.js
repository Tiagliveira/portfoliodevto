import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
  margin: 10% 35% 20px 40%;

  @media ${device.tablet}{
    margin:55% 27% 5%;
  }

  @media ${device.mobile} {
    font-size: 30px;
    margin: 5%;
  }

  @media ${device.mobileMini} {
    font-size:28px;
    margin:10% 2%;
    
  }
`;

export const SectionSoftSkills = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  display: grid;
  grid-template-columns:repeat(3, 320px);
  gap: 40px;

  @media ${device.tablet} {
    display:grid;
    grid-template-columns:repeat(2,300px);
  }

  @media ${device.mobile} {
    max-width: 400px;
    display: flex;
    justify-content:center;
    align-items:center;
  }

  li {
    position: relative;
    overflow: hidden;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    background: linear-gradient(
      0deg,
      rgba(0, 255, 194, 0.8) 10%,
      rgba(28, 31, 38, 0.8) 50%
    );
    color: #ffffff;
    height: 270px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-shadow: 3px 3px 3px rgba(28, 31, 38, 0.6);

    @media ${device.mobile} {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      height: 350px;
      h3 {
        font-size: 28px;
      }

      p {
        font-size: 22px;
      }
    }
  }
  li:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
  }
  img:hover {
    transform: translatey(60%) scale(1.5);
    transition: 0.5s;
    border: 3px solid #1c1f26;
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
  }

  Seach:hover {
    transform: none;
    border: none;
    box-shadow: none;
    opacity: 0;
  }
`;

export const DivButton = styled.div `
margin-top:20px;
display:flex;
gap:20px;
justify-content:center;
align-items: center;
`

export const Img = styled.img`
width:80px;

`
