import { Container, DivButton, Img, SectionTechnicalSkills, SubTitle } from "./styles";
import { useState, useEffect } from "react";

import Structure from "../../assets/estrutura-da-web.gif";
import Responsive from "../../assets/responsivo.gif";
import Quality from "../../assets/qualidade.gif";
import Database from "../../assets/banco-de-dados.gif";
import backEnd from "../../assets/programas.gif";
import APIs from "../../assets/apis.gif";

import Stop from "../../assets/stop.png"
import Prev from "../../assets/prev.gif"
import Next from "../../assets/next.gif"

export default function TechnicalSkills() {
  const skills = [
    {
      img: Structure,
      title: "Estrutura de código",
      desc: "Cuidando para ter um código estruturado, e com boa aparência e identificação, mantendo o código limpo e organizado.",
    },
    {
      img: Responsive,
      title: "Sistemas Web e Design",
      desc: "Desenvolvimento de sites modernos com interfaces visualmente atrativas e boas práticas de UX/UI.",
    },
    {
      img: Database,
      title: "Modelagem de Banco de Dados",
      desc: "Criação de estruturas com frameworks (prisma client) para uso MongoDB, modelagem relacional e integrações com back end.",
    },
    {
      img: backEnd,
      title: "Backend e Git",
      desc: "Desenvolvimento back end JavaScript (com Node.js), utilizando boas práticas de versionamento com Git.",
    },
    {
      img: APIs,
      title: "Integração com APIs e Microsserviços",
      desc: "Conexão entre sistemas via APIs RESTfull, com autenticação segura e lógica personalizada.",
    },
    {
      img: Quality,
      title: "Qualidade nos Projetos",
      desc: "Excelência no desenvolvimento de software, unindo qualidade de código, arquitetura escalável e design bem estruturado, garantindo manutenibilidade e colaboração eficiente.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta automaticamente se está no mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Troca automática no mobile
  //useEffect(() => {
  //  if (isMobile) {
   //   const interval = setInterval(() => {
  //      setCurrentIndex((prev) => (prev + 1) % skills.length);
  //    },);
 //     return () => clearInterval(interval);
   // }
  //}, [isMobile, skills.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <Container>
      <SubTitle>Habilidades tecnicas</SubTitle>
      <SectionTechnicalSkills>
        {isMobile
          ? // Mobile → 1 item por vez
            [skills[currentIndex]].map((skill, index) => (
              <li key={index}>
                <img
                  src={skill.img}
                  width="75px"
                  style={{ borderRadius: "50px" }}
                  alt={skill.title}
                />
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </li>
            ))
          : // Desktop → mostra todos
            skills.map((skill, index) => (
              <li key={index}>
                <img
                  src={skill.img}
                  width="75px"
                  style={{ borderRadius: "50px" }}
                  alt={skill.title}
                />
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </li>
            ))}

        {isMobile && (
          <DivButton >
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                backgroundColor: currentIndex === 0 ? "transparent" : "transparent",
                    border: "none",
               }}
            >
              <Img src={currentIndex === 0 ? Stop : Prev}/>
            </button>
            <button
              onClick={next}
              disabled={currentIndex === skills.length - 1}
              style={{
                cursor:
                  currentIndex === skills.length - 1
                    ? "not-allowed"
                    : "pointer",
                    backgroundColor: currentIndex === 0 ? "transparent" : "transparent",
                    border: "none",
              }}
            >
              <Img src={currentIndex === skills.length - 1 ? Stop : Next}/>
            </button>
          </DivButton>
        )}
      </SectionTechnicalSkills>
    </Container>
  );
}


