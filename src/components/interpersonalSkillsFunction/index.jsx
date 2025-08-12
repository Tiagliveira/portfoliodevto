import { useState, useEffect } from "react";

import Seach from "../../assets/pesquisa-online-1--unscreen.gif";
import Teamwork from "../../assets/trabalhoEmEquipe.png";
import Communication from "../../assets/tres-amigos.gif";
import Adaptability from "../../assets/camaleao.gif";
import Persistence from "../../assets/escalada.gif";
import Proactive from "../../assets/multitarefa.gif";
import EasyLearning from "../../assets/ideia.gif";
import { DivButton, Img, SectionSoftSkills, SubTitle } from "./styles";
import ImageTeamWork from "../../assets/trabalho_em_equipe.png";
import ImageAdaptability from "../../assets/adaptação.jpg";
import ImageCommunication from "../../assets/comunicação_efetiva.png";
import ImageProactive from "../../assets/Proativo.png";
import ImageEasyLearning from "../../assets/Estudante.png";
import ImagePersistence from "../../assets/Persistencia.JPG";

import Stop from "../../assets/stop.png";
import Prev from "../../assets/prev.gif";
import Next from "../../assets/next.gif";

function HoverImageItem({ imageHover, icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem que aparece ao hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateX(0)" : "translateX(-100%)",
          pointerEvents: "none",
        }}
      >
        <img
          src={imageHover}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Texto padrão */}
      <span
        style={{
          zIndex: 1,
          opacity: isHovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          display: "block",
          color: "#fff",
        }}
      >
        <img src={icon} width="75px" style={{ borderRadius: "50px" }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <img
            src={Seach}
            style={{
              width: "35px",
              borderRadius: "30px",
              position: "absolute",
              top: "85%",
              left: "88%",
            }}
          />
        </div>
      </span>
    </li>
  );
}

export default HoverImageItem;

export function InterpersonalSkills() {
  const skills = [
    {
      imageHover: ImageTeamWork,
      icon: Teamwork,
      title: "Trabalho em Equipe",
      description:
        "Gosto de trabalhar em equipe, pois assim unimos forças, ideias e conhecimento, para um só objetivo: alcançar metas, criação de projeto, incentivando a equipe, numa solução mútua finalização do projeto.",
    },
    {
      imageHover: ImageCommunication,
      icon: Communication,
      title: "Comunicação Efetiva",
      description:
        "Por ser uma pessoa comunicativa e transparente, sempre busco facilitar a compreensão e colaboração de todos.",
    },
    {
      imageHover: ImageAdaptability,
      icon: Adaptability,
      title: "Adaptabilidade",
      description:
        "Sou uma pessoa de fácil adaptação, principalmente na área Profissional, pois estou sempre disposto a mudanças constantes.",
    },
    {
      imageHover: ImagePersistence,
      icon: Persistence,
      title: "Persistência",
      description:
        "Por ser uma pessoa persistente, tenho uma vantagem e não desistir ate que se concretize os meus objetivos e metas, voltado também a área profissional.",
    },
    {
      imageHover: ImageProactive,
      icon: Proactive,
      title: "Proativo",
      description:
        "Sempre me coloco na posição de entrega algo a mais, fazer algo a mais, colocar-me a frente das oportunidades que podem surgir.",
    },
    {
      imageHover: ImageEasyLearning,
      icon: EasyLearning,
      title: "Facil Apredizagem",
      description:
        "Por está sempre buscando novas oportunidades, é necessário sempre buscar conhecimento, por isto tenho grande facilidade em adquirir conhecimento.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 767);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () => {
    if (currentIndex < skills.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SubTitle>Habilidades Interpessoais</SubTitle>
      <SectionSoftSkills>
        {isMobile
          ? // Mobile: mostra só 1 item baseado no currentIndex
            [
              <HoverImageItem
                key={currentIndex}
                imageHover={skills[currentIndex].imageHover}
                icon={skills[currentIndex].icon}
                title={skills[currentIndex].title}
                description={skills[currentIndex].description}
              />,
            ]
          : // Desktop: mostra todos
            skills.map((skill, index) => (
              <HoverImageItem
                key={index}
                imageHover={skill.imageHover}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
      </SectionSoftSkills>

      {isMobile && (
        <DivButton>
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            style={{
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              backgroundColor:
                currentIndex === 0 ? "transparent" : "transparent",
              border: "none",
            }}
          >
            <Img src={currentIndex === 0 ? Stop : Prev} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex === skills.length - 1}
            style={{
              cursor:
                currentIndex === skills.length - 1 ? "not-allowed" : "pointer",
              backgroundColor:
                currentIndex === 0 ? "transparent" : "transparent",
              border: "none",
            }}
          >
            <Img src={currentIndex === skills.length - 1 ? Stop : Next} />
          </button>
        </DivButton>
      )}
    </div>
  );
}
{
  /*export function InterpersonalSkills() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SubTitle style={{ margin: "20px 35% 20px 40%" }}>
        {" "}
        Habilidades Interpessoais
      </SubTitle>
      <SectionSoftSkills
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex, grid",
          flexWrap: "wrap",
        }}
      >
        <HoverImageItem
          imageHover={ImageTeamWork}
          icon={Teamwork}
          title="Trabalho em Equipe"
          description="Gosto de trabalhar em equipe, pois assim unimos forças, ideias e
              conhecimento, para um só objetivo: alcançar metas, criação de
              projeto, incentivando a equipe, numa solução mútua finalização do
              projeto."
        />
        <HoverImageItem
          imageHover={ImageCommunication}
          icon={Communication}
          title="Comunicação Efetiva"
          description="Por ser uma pessoa comunicativa e transparente, sempre busco
              facilitar a compreensão e colaboração de todos."
        />
        <HoverImageItem
          imageHover={ImageAdaptability}
          icon={Adaptability}
          title="Adaptabilidade"
          description="Sou uma pessoa de fácil adaptação, principalmente na área
              Profissional, pois estou sempre disposto a mudanças constantes."
        />
        <HoverImageItem
          imageHover={ImagePersistence}
          icon={Persistence}
          title="Persistência"
          description="Por ser uma pessoa persistente, tenho uma vantagem e não desistir
              ate que se concretize os meus objetivos e metas, voltado também a
              área profissional."
        />
        <HoverImageItem
          imageHover={ImageProactive}
          icon={Proactive}
          title="Proativo"
          description="Sempre me coloco na posição de entrega algo a mais, fazer algo a
              mais, colocar-me a frente das oportunidades que podem surgir."
        />
        <HoverImageItem
          imageHover={ImageEasyLearning}
          icon={EasyLearning}
          title="Facil Apredizagem"
          description="Por está sempre buscando novas oportunidades, é necessário sempre
              buscar conhecimento, por isto tenho grande facilidade em adquirir
              conhecimento."
        />
      </SectionSoftSkills>
    </div>
  );
}*/
}
