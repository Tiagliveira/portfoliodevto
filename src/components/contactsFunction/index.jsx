import {
  ContainerForm,
  Form,
  InputName,
  InputPhone,
  Message,
  LinkNetwork,
  ContainerNetwork,
  LitleBox,
  SubTitle,
  Presentation,
  Container,
  DivItens,
  DivText,
} from "./styles";
import Submit from "../../assets/submit.gif";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin2.png";
import GitHub from "../../assets/github (1).png";
import WhatsApp from "../../assets/whatsApp.png";
import AvatarArtRotator from "../avatarArt";
import DictatingText from "../Message";

export default function Contact() {
  return (
    <Container>
      <SubTitle> Contato</SubTitle>

      <Presentation
        style={{ marginTop: "20px", marginBottom: "100px", textAlign: "center" }}
      >
        Que ótimo que chegou áte aqui bora bater um papo! <br />
        Aqui estão os meus contatos
      </Presentation>
      <LitleBox>
        <ContainerForm>
          <Form
            action="https://formcarry.com/s/VEX_C9vLlK4"
            method="POST"
            encType="multipart/form-data"
          >
            <InputName type="text" name="name" placeholder="Nome" required />
            <InputPhone
              type="tel"
              name="phone"
              placeholder="Telefone"
              required
            />
            <Message name="message" placeholder="Bora bater um papo" required />
            <Button type="submit" />
          </Form>
        </ContainerForm>
        <DivItens>
          <AvatarRotator />
          <ContainerNetwork>
            <LitleBox>
              <LinkNetwork
                href="https://www.instagram.com/THI_LIVEIRA007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="logo instagram" />
              </LinkNetwork>
            </LitleBox>
            <LitleBox>
              <LinkNetwork
                href="https://www.linkedin.com/in/tiagoliveira-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="logo linkedln" />
              </LinkNetwork>
            </LitleBox>
            <LitleBox>
              <LinkNetwork
                href="https://github.com/Tiagliveira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="logo github" />
              </LinkNetwork>
            </LitleBox>
            <LitleBox>
              <LinkNetwork
                href="https://wa.me/5511987981104?text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20bater%20um%20papo!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={WhatsApp} alt="logo whatsApp" />
              </LinkNetwork>
            </LitleBox>
          </ContainerNetwork>
        </DivItens>
        <Text />
      </LitleBox>
     
    </Container>
  );
}

function Button() {
  return (
    <button style={{ width: "120px", height: "60px", borderRadius: "20px" }}>
      <img
        src={Submit}
        alt="Enviar"
        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
      />
    </button>
  );
}

const imageGif = [
  "/AvatarBye.PNG",
  "/avatarGif1.PNG",
  "/avatarGif2.PNG",
  "/avatarGif3.PNG",
  "/avatarGif4.PNG",
];

function AvatarRotator() {
  return (
    <>
      <AvatarArtRotator images={imageGif} interval={3000} />
    </>
  );
}

function Text() {
  return (
    <DivText>
      <DictatingText
        text="Desafios exigem entrega. E a vida recompensa quem não desiste e se reinventa a cada dia.
        DevTO</>"
        speed={150}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      />
    </DivText>
  );
}
