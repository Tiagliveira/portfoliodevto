import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 255, 194, 0.5);
  margin-top:0;
   margin-bottom: 20px;
   text-align: center;

   @media ${device.mobile} {
    margin-top:20%;
   }

   @media ${device.mobileMini} {
    margin:0 48%;
   }
`;

export const Container = styled.div`
  width: 100%;
  height: 88%;

@media ${device.tablet} {
  width: 80%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin:0 auto;
    height:100vh;
}
 

  @media ${device.mobile} {
    width: 380px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin:0 auto;
    height:100vh;
  }

  @media ${device.mobileMini} {
    width:300px;
  }
`;

export const Presentation = styled.p`
  font-size: 25px;
  justify-content: center;
  max-width: 600px;
  margin: 50px auto;
  margin-bottom: 100px;

  @media ${device.tablet} {
    display:none;
  }

  @media ${device.mobile} {
    display:none;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-left: 200px;
  margin-bottom: 50px;

  @media ${device.tablet} {
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 4% 5%;
  }
    
  

  @media ${device.mobile} {
    width:380px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 4% 5%;
  }

  @media ${device.mobileMini} {
    width:300px;
  }
`;
export const Form = styled.form`
  height: 330px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: linear-gradient(
    90deg,
    rgba(128, 128, 128, 0.5) 20%,
    rgba(127, 255, 212, 0.5) 50%,
    rgba(128, 128, 128, 0.5) 80%
  );
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: 0px 0px 5px 5px rgba(0, 255, 194, 0.6);

  button {
    margin: 0 35%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.5);
    }
  }
`;
export const InputName = styled.input`
  width: 80%;
  height: 40px;
  margin: 20px 10%;
  font-size: 20px;
  font-weight: 500;
  color: #696969;
  background: rgba(127, 255, 212, 0.5);
  border-radius: 10px;
  border: 2px solid #000;
`;

export const InputPhone = styled.input`
  width: 80%;
  height: 40px;
  margin: 0px 10%;
  font-size: 20px;
  font-weight: 500;
  color: #383838ff;
  background: rgba(127, 255, 212, 0.5);
  border-radius: 10px;
  border: 2px solid #000;
  outline: none;
`;

export const Message = styled.textarea`
  width: 80%;
  height: 100px;
  margin: 20px 10%;
  font-size: 20px;
  font-weight: 500;
  color: #696969;
  background: rgba(127, 255, 212, 0.5);
  border-radius: 10px;
  border: 2px solid #000;
`;

export const ContainerNetwork = styled.div`
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin: 0 0 2% 50px;

@media ${device.tablet} {
  display:flex;
    justify-content:center;
    align-items:center;
    margin:2% 12%;
    width:300px;
}

  @media ${device.mobile} {
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 ;
    width:90%;
  }
`;

export const LitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column-reverse;
    

  }
`;

export const LinkNetwork = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;

  background: radial-gradient(
    circle,
    rgba(0, 255, 194, 0.8) 10%,
    rgba(128, 128, 128, 0.8) 40%,
    rgba(28, 31, 31, 0.8) 60%,
    rgba(128, 128, 128, 0.8) 80%
  );
 
  img {
    width: 40px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

   @media ${device.mobileMini} {
    width:60px;
    height:60px;
   }
`;

export const Text = styled.p``;

export const DivItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   @media ${device.tablet} {
    margin:0 50%;
    display:block;
    flex-direction:row;

  }

  @media ${device.mobileMini} {
    width:300px;
    margin:0;
  }
`;


export const DivText = styled.div`
width:300px; 
height: 100%; 
margin: auto auto auto 5%;

@media ${device.tablet} {
  
  width:90%;
  height:30%;
}

 

@media ${device.mobile} {
  width:80%;
  margin: 2% 10% 5%;
}
`