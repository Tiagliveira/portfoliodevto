import { useState, useEffect } from "react";
import Logo from "../../assets/logoTO.png";
import {
  Header,
  ImgLogo,
  Link,
  Hamburger,
  LinksContainer,
} from "./styles";

  

  function Main() {
    const [activeId, setActiveId] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const sections = document.querySelectorAll("section");

    const oberver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    },
    {threshold: 0.5}
  );
  
    sections.forEach((section) => oberver.observe(section));

    return () => {
      sections.forEach((section) => oberver.unobserve(section));
    };
  }, []);

  function handleClickLink(){
    setMenuOpen(false);
  }
       
   
  return (
    <Header className="main-nav">
      <Hamburger onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <div/>
        <div/>
        <div/>
      </Hamburger>
      <ImgLogo src={Logo} alt="logo_devTo"/>
      <LinksContainer open={menuOpen}>
      <Link href="#home" className={activeId === "home" ? "active" : ""} onClick={handleClickLink}>Página Inicial</Link>
      <Link href="#about" className={activeId === "about" ? "active" : ""} onClick={handleClickLink}>Sobre</Link>
      <Link href="#skills" className={activeId === "skills" ? "active" : ""} onClick={handleClickLink}>Habilidades</Link>
      <Link href="#projects" className={activeId === "projects" ? "active" : ""} onClick={handleClickLink}>Projetos</Link>
      <Link href="#contact" className={activeId === "contact" ? "active" : ""} onClick={handleClickLink}>Contato</Link>
     </LinksContainer>
    </Header>
  );
}
  

export default Main

 