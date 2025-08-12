import Main from "../../components/defaultHeader";
import { InterpersonalSkills } from "../../components/interpersonalSkillsFunction";
import { Technology } from "../../components/tecnologyIcon";
import Projects from "../../components/projectFunction";
import Contact from "../../components/contactsFunction";
import HomePage from "../../components/homePages";
import About from "../../components/AboutFunction";
import { ContainerBackground } from "../../components/backgrounStyle/styles";
import {
  DivScroll,
  SectionContact,
  SectionHome,
  SectionProjects,
} from "./styles";
import TechnicalSkills from "../../components/skillsFunction";
import Footer from "../../components/footerFunction";

function Home() {
  return (
    <ContainerBackground>
      <Main />

      <DivScroll>
        <SectionHome id="home">
          <HomePage />
        </SectionHome>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <TechnicalSkills />
        </section>

        <section id="interpersonalSkills">
          <InterpersonalSkills />
        </section>

        <section id="technology">
          <Technology />
        </section>

        <SectionProjects id="projects">
          <Projects />
        </SectionProjects>

        <SectionContact id="contact">
          <Contact />
             <Footer />
        </SectionContact>


      </DivScroll>
    </ContainerBackground>
  );
}

export default Home;
