import { useState,useEffect } from "react";

import {
  Button,
  Button2,
  Code,
  Container,
  Container2,
  Demo,
  List,
  Name,
  SubTitle,
  Summary,
} from "./styles";
import DefaultButton from "../button";
import AutoImageRotator from "../imageAuto";
import ArrowLeft from "../../assets/arrowLeft.gif";
import ArrowRight from "../../assets/arrowRight.gif";
import Not from "../../assets/cancel-unscreen.gif";

import ProjetoMario1 from "../../assets/projetoMario1.JPG"
import ProjetoMario2 from "../../assets/projetoMario2.JPG"
import ProjetoMario3 from "../../assets/projetoMario3.JPG"

import JoKePo1 from "../../assets/joKenPo1.JPG"
import JoKePo2 from "../../assets/joKenPo2.JPG"
import JoKePo3 from "../../assets/joKenPo3.JPG"

import ConversorDeMoedas1 from "../../assets/ConversorDeMoedas1.JPG"
import ConversorDeMoedas2 from "../../assets/ConversorDeMoedas2.JPG"
import ConversorDeMoedas3 from "../../assets/ConversorDeMoedas3.JPG"

import Portifolio1 from "../../assets/portifolio1.JPG"
import Portifolio2 from "../../assets/portifolio2.JPG"      
import Portifolio3 from "../../assets/portifolio3.JPG"

const todosOsProjetos = [
    {
    titulo: "Portfólio Pessoal",
    descricao: "Este é meu portfólio pessoal desenvolvido em React, onde apresento meus projetos e habilidades em desenvolvimento web.",
    imagens: [Portifolio1,Portifolio2,Portifolio3],
    linkCodigo: "https://github.com/Tiagliveira/portfoliodevto",
    linkDemo: "https://tiagliveira.github.io/portfoliodevto/",
  },
  {
    titulo: "Projeto Mario",
    descricao: "Este é um projeto de landing page inspirado no Mario Bros, desenvolvido em HTML, CSS e JavaScript. que permite aos usuários solicitar um orçamento para um serviço.",
    imagens: [ProjetoMario1,ProjetoMario2,ProjetoMario3],
    linkCodigo: "https://github.com/Tiagliveira/Mario-bros",
    linkDemo: "https://tiagliveira.github.io/Mario-bros/",
  },
  {
    titulo: "Jokenpô Game",
    descricao: "Este é um jogo de Jokenpô (Pedra, Papel e Tesoura) desenvolvido em HTML, CSS E JAVASCRIPT. O usuário pode jogar contra o computador, e o resultado é exibido na tela.",
    imagens: [JoKePo1,JoKePo2,JoKePo3],
    linkCodigo: "https://github.com/Tiagliveira/Joken-Po",
    linkDemo: "https://tiagliveira.github.io/Joken-Po/",
  },
  {
    titulo: "Conversor de Moedas",
    descricao: "Este projeto é um conversor de moedas, que permite a conversão entre diferentes moedas utilizando uma API externa.",
    imagens: [ConversorDeMoedas1,ConversorDeMoedas2,ConversorDeMoedas3],
    linkCodigo: "https://github.com/Tiagliveira/conversor-de-moedas",
    linkDemo: "https://tiagliveira.github.io/conversor-de-moedas/",
  },

];

const ITENS_VISIVEIS = 3;

function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const [showActions, setShowActions] = useState(null);
  const [itemsVisiveis, setItemsVisiveis] = useState(3); // padrão desktop

  // Detectar tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsVisiveis(1); // mobile
      } else {
        setItemsVisiveis(3); // desktop
      }
    };

    handleResize(); // executa ao carregar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const avancar = () => {
    if (startIndex + itemsVisiveis < todosOsProjetos.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const voltar = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visiveis = todosOsProjetos.slice(startIndex, startIndex + itemsVisiveis);

  return (
    <div style={{ position: "relative" }}>
      <Button
        onClick={voltar}
        disabled={startIndex === 0}
        style={{
          cursor: startIndex === 0 ? "not-allowed" : "pointer",
          fontSize: "16px",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={startIndex === 0 ? Not : ArrowLeft}
          alt="Voltar"
        />
      </Button>

      <SubTitle>Projetos</SubTitle>

      <Container style={{ listStyle: "none", transition: "all 0.4s ease-in-out" }}>
        {visiveis.map((proj, index) => (
          <List key={index} style={{ transition: "all 0.50s ease-in-out" }}>
            <AutoImageRotator images={proj.imagens} interval={3000} />
            <Name>{proj.titulo}</Name>
            <Summary>{proj.descricao}</Summary>
            <DefaultButton
              onClick={() =>
                setShowActions((prev) => (prev === index ? null : index))
              }
            >
              Opções
            </DefaultButton>
            {showActions === index && (
              <Container2 onClick={() => setShowActions(null)}>
                <Code
                  as="a"
                  href={proj.linkCodigo}
                  target="-blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Código
                </Code>
                <Demo
                  as="a"
                  href={proj.linkDemo}
                  target="-blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Deploy
                </Demo>
              </Container2>
            )}
          </List>
        ))}
      </Container>

      <Button2
        onClick={avancar}
        disabled={startIndex + itemsVisiveis >= todosOsProjetos.length}
        style={{
          cursor:
            startIndex + itemsVisiveis >= todosOsProjetos.length
              ? "not-allowed"
              : "pointer",
          fontSize: "16px",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={
            startIndex + itemsVisiveis >= todosOsProjetos.length ? Not : ArrowRight
          }
          alt="Avançar"
        />
      </Button2>
    </div>
  );
}

export default Projects;

