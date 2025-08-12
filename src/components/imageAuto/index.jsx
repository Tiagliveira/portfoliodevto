import { useState, useEffect } from "react";
import { Img } from "./styles";


const AutoImageRotator = ({ images = [], interval = 2000, style = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (images.length === 0) return null;

  return (
    <Img
      src={images[currentIndex]}
      alt="Imagem rotativa"
      style={{
        opacity: fade ? 1 : 0,
        display: "block",
        ...style,
      }}
    />
  );
};

export function ProjectList() {
  const todosOsProjetos = [
  ];

  return (
    <Container>
      {todosOsProjetos.map((proj, index) => (
        <ProjectItem key={index} projeto={proj} />
      ))}
    </Container>
  );
}

// ✅ Componente do item individual (li)


export default AutoImageRotator