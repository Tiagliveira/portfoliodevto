import QrCodeGenerator from "../functionQrCode";
import { Container, Text } from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <QrCodeGenerator/>
      </div>
      <div>
        <Text>© 2025 Tiago Oliveira -Não é o fim, é só o começo da próxima ideia.</Text>
          <Text>Dev TO é um projeto pessoal badeado nas iniciais de Desenvolvedor Tiago Oliveira </Text>
       
      </div>
    </Container>
  );
}

export default Footer;
