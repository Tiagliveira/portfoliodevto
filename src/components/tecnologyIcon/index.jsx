import { useState, useEffect } from "react";
import { ContainerIcon, ContainerImageIcon, SubTitle } from "./styles";

import HTML from "../../assets/html-5.png";
import CSS from "../../assets/css.png";
import JAVASCRIPT from "../../assets/java-script.png";
import NODEJS from "../../assets/nodejs.png";
import MONGODB from "../../assets/MongoDB.png";
import REACT from "../../assets/React.png";
import TYPESCRIPT from "../../assets/typescript.png";
import N8N from "../../assets/n8n.png";


export function Technology() {
  const skills = [
    {
      Description:
        "Essa e a liguagem de marcação padrão para estruturar da paginas web, ou seja (Esquelo).",
      Icon: HTML,
      NameIcon: "HTML",
    },
    {
      Description:
        "Essa e a liguagem usada para estilizar sua pagina web,toda parte visível (parte Bonita).",
      Icon: CSS,
      NameIcon: "CSS",
    },
    {
      Description:
        "Liguagem usada principalmente para interação nas paginas web (Movimento do itens na tela).",
      Icon: JAVASCRIPT,
      NameIcon: "JavaScript",
    },
    {
      Description:
        "É um ambiente de execução JavaScript que permite a execução fora do navegador.('como em servidores')",
      Icon: NODEJS,
      NameIcon: "Node.js",
    },
    {
      Description:
        "É um sistema de gerenciamento de banco de dados, NoSQL de código aberto, (recomendado para documentos) .",
      Icon: MONGODB,
      NameIcon: "MongoDB",
    },
    {
      Description:
        "É uma biblioteca JavaScript ultilizada para construir interfaces de usuário UI (Interativas).",
      Icon: REACT,
      NameIcon: "React",
    },
    {
      Description:
        "É uma liguagem de programação desenvolvida pela Microsorft para adicionar (Tipagem no JavaScript).",
      Icon: TYPESCRIPT,
      NameIcon: "TypeScript",
    },
    {
      Description:
        "É uma plataforma de automação de fluxo de trabalho que combina exclusivamente recursos de IA com automação.",
      Icon: N8N,
      NameIcon: "n8n",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detecta mobile
  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 767);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Rotação automática no mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % skills.length);
      }, 5000); // troca a cada 5s
      return () => clearInterval(interval);
    }
  }, [isMobile, skills.length]);

  return (
    <div>
      <SubTitle>Tecnologias</SubTitle>

      <ContainerIcon>
        {isMobile
          ? // Mobile → 1 por vez
            [
              <div
                key={currentIndex}
                style={{
                  transition: "all 0.3s ease-in-out",
                  opacity: 1,
                }}
              >
                <HoverIcon
                  Description={skills[currentIndex].Description}
                  Icon={skills[currentIndex].Icon}
                  NameIcon={skills[currentIndex].NameIcon}
                />
              </div>,
            ]
          : // Desktop → todos
            skills.map((skill, index) => (
              <HoverIcon
                key={index}
                Description={skill.Description}
                Icon={skill.Icon}
                NameIcon={skill.NameIcon}
              />
            ))}
      </ContainerIcon>
    </div>
  );
}

function HoverIcon({ Description, Icon, NameIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "180px",
        height: "180px",
        fontSize: "17px",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        margin: "10px",
        cursor: "default",
      }}
    >
      <div
        className="box-text"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translatey(0)" : "translatey(-100%)",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            objectFit: "cover",
          }}
        >
          {Description}
        </p>
      </div>

      <span
        style={{
          zIndex: 1,
          opacity: isHovered ? 0 : 1,
          background: "#ffffff",
          width: "100%",
          height: "100%",
          transition: "opacity 0.6s ease",
          display: "block",
        }}
      >
        <div className="box-icon">
          <ContainerImageIcon>
            <img src={Icon} width="75px" />
          </ContainerImageIcon>
          <h3
            style={{
              fontSize: "25px",
              fontWeight: "800",
              backgroundImage:
                "linear-gradient(0deg,rgba(28, 31, 38, 1) 21%, rgba(0, 255, 194, 1) 77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {NameIcon}
          </h3>
        </div>
      </span>
    </li>
  );
}

export default HoverIcon;

{/*export function Technology() {
  return (
    <div>
      {" "}
      <SubTitle style={{ margin: "100px 50% 20px 45%" }}>
        {" "}
        Tecnologias
      </SubTitle>
      <ContainerIcon>
        <HoverIcon
          Description="Essa e a liguagem de marcação padrão para estruturar da paginas web, ou seja (Esquelo)."
          Icon={HTML}
          NameIcon="HTML"
        />
        <HoverIcon
          Description="Essa e a liguagem usada para estilizar sua pagina web,toda parte visível (parte Bonita)."
          Icon={CSS}
          NameIcon="CSS"
        />
        <HoverIcon
          Description="Liguagem usada principalmente para interação nas paginas web (Movimento do itens na tela)."
          Icon={JAVASCRIPT}
          NameIcon="JavaScript"
        />
        <HoverIcon
          Description="É um ambiente de execução JavaScript que permite a execução fora do navegador.('como em servidores')"
          Icon={NODEJS}
          NameIcon="Node.js"
        />
        <HoverIcon
          Description="É um sistema de gerenciamento de banco de dados, NoSQL de código aberto, (recomendado para documentos) ."
          Icon={MONGODB}
          NameIcon="MongoDB"
        />
        <HoverIcon
          Description="É uma biblioteca JavaScript ultilizada para construir interfaces de usuário UI (Interativas)."
          Icon={REACT}
          NameIcon="React"
        />
        <HoverIcon
          Description="É uma liguagem de programação desenvolvida pela Microsorft para adicionar (Tipagem no JavaScript)."
          Icon={TYPESCRIPT}
          NameIcon="TypeScript"
        />
        <HoverIcon
          Description="É uma plataforma de automação de fluxo de trabalho que combina exclusivamente recursos de IA com automação."
          Icon={N8N}
          NameIcon="n8n"
        />
      </ContainerIcon>
    </div>
  );
}*/}
