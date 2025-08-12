import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
  margin: 5% 50% 2% 45%;

  @media ${device.tablet} {
    margin: 10% 42%;
  }

  @media ${device.mobile} {
    margin: 22% 35% 10%;
  }
`;

export const Container = styled.ul`
  margin-top: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 30px;
  padding: 0;
  margin: 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 400px);
  }

  @media ${device.mobile} {
    display: flex;
    grid-template-columns: repeat(1, 300px);
  }
`;

export const List = styled.li`
  height: 500px;
  list-style: none;
  border-radius: 12px;
  border: 3px solid rgba(0, 255, 194, 0.6);
  text-justify: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media ${device.mobile} {
    width: 300px;
    gap: 20px;
  }

  @media ${device.mobileMini} {
    width: 280px;
  }

  button:hover {
    opacity: 0.7;
    box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);
  }
  img:hover {
    transform: scale(1.3);
  }
`;
export const Name = styled.h2`
  margin: 10px 0;
  font-size: 25px;
  font-weight: 800;
  text-shadow: 3px 3px 3px rgba(0, 255, 194, 0.7);
`;

export const Summary = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  text-shadow: 3px 3px 3px rgba(0, 255, 194, 0.7);

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const Container2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease, transform 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.99) 15%,
    rgba(10, 12, 16, 0.7) 50%,
    rgba(10, 12, 16, 0.99) 85%
  );
  border-radius: 12px;
  @keyframes shadowPulse {
    100% {
      box-shadow: 0px 0px 12px 3px rgba(0, 255, 194, 0.9);
    }
    50% {
      box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.8);
    }
    100% {
      box-shadow: 0px 0px 12px 3px rgba(0, 255, 194, 0.9);
    }
  }
  border-radius: 12px;
  animation: shadowPulse 2s infinite, borderColorPulse 2s infinite;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(28, 28, 38, 0.75) 20%,
      rgba(255, 0, 0, 0.75) 50%,
      rgba(28, 28, 38, 0.75) 80%
    );
    box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.6);
    border: none;
    opacity: 0.8;
    transition: 0.5s ease-in-out;
  }
  border: none;
`;

export const Code = styled.button`
  font-size: 20px;
  font-weight: 600;
  min-width: 80%;
  padding: 6px;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 38, 0.75) 20%,
    rgba(2, 54, 225, 0.75) 50%,
    rgba(28, 28, 38, 0.75) 80%
  );
  color: #fff;
  border: 3px solid rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(28, 28, 38, 0.75) 20%,
      rgba(255, 0, 0, 0.75) 50%,
      rgba(28, 28, 38, 0.75) 80%
    );
    box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.6);
    border: none;
    opacity: 0.8;
    transition: 0.5s ease-in-out;
  }
`;
export const Demo = styled.button`
  font-size: 20px;
  font-weight: 600;
  min-width: 80%;
  padding: 6px;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 38, 0.75) 20%,
    rgba(5, 182, 76, 0.75) 50%,
    rgba(28, 28, 38, 0.75) 80%
  );
  border: 3px solid rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  a {
    text-decoration: underline;
    text-decoration: none;
  }
  :hover {
    background: linear-gradient(
      90deg,
      rgba(28, 28, 38, 0.75) 20%,
      rgba(255, 0, 0, 0.75) 50%,
      rgba(28, 28, 38, 0.75) 80%
    );
    box-shadow: 0px 0px 5px 5px rgba(255, 0, 0, 0.6);
    border: none;
    opacity: 0.8;
    transition: 0.5s ease-in-out;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 45%;
  left: 14%;
  z-index: 2;
  border: none;
  border-radius: 50px;

  img {
    width: 100px;
    height: 100px;
  }

  @media ${device.mobile} {
    left: 5%;

    img {
      width: 70px;
      height: 70px;
    }
  }

  @media ${device.mobileMini} {
    left: 0%;

    img{
      width:60px;
      height:60px;
    }
  }
`;
export const Button2 = styled.button`
  position: absolute;
  bottom: 35%;
  right: 13.5%;
  z-index: 2;
  border: none;
  border-radius: 50px;

  img {
    width: 100px;
    height: 100px;
  }

  @media ${device.mobile} {
    bottom: 42%;
    right: 3%;

    img {
      width: 70px;
      height: 70px;
    }
  }

  @media ${device.mobileMini} {
    right: 0%;

     img{
      width:60px;
      height:60px;
    }
  }
`;
