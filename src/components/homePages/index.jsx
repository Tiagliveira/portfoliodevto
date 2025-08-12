import DefaultButton from "../button";
import ImgAvatar from "../ImageAvatar";
import DictatingText from "../Message";
import ToLow from "../../assets/lowArrow.gif";
import { Box, ContainerButton, ContainerIMage, ContainerText, SubTitle } from "./styles";

import Curriculo from "../../assets/Tiago_de_Oliveira_CV.pdf";

function HomePage() {
  return (
    <Box style={{ height: "100vh" }}>
      <ContainerText>
        <SubTitle>Olá👋</SubTitle>
        <SubTitle>
          <DictatingText
            text="Sou o Tiago Oliveira
            Desenvolvedor Full Stack
             Construo aplicações web modernas, escaláveis e intuitivas, buscando sempre a performance e experiência do usuário."
          />
        </SubTitle>

        <ContainerButton>
          <DefaultButton type="button" onClick={() => window.location.href="#projects"}>Projetos</DefaultButton>
          <DefaultButton type="button" onClick={() => window.location.href="#contact"}>Contatos</DefaultButton>
          <DefaultButton type="button" onClick={abrircurriculo}>Currículo</DefaultButton>
        </ContainerButton>
      </ContainerText>

      <ContainerIMage>
        <ImgAvatar
          style={{ transition: "100s ease-in-out", cursor: "grabbing" }}
          alt="Avatar DevTo"
        />
      </ContainerIMage>
      <img
        style={{
          width: "80px",
          position: "relative",
          top: "250px",
          left: "-29%",
          cursor: "pointer",
        }}
        src={ToLow}
        alt="seta para baixo"
        onClick={() => {
          const section = document.getElementById("about");
          section.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </Box>
  );
}

export default HomePage;

function abrircurriculo() {
  window.open(Curriculo, '_blank', 'noopener,noreferrer');
}
