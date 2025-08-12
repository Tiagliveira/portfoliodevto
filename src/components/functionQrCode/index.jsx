import { QRCodeCanvas } from "qrcode.react";
import React,{useState} from "react";
import { ButtonQrCode, ButttoMobile, Container } from "./styles";

import Mobile from "../../assets/mobile.gif"

export default function QrCodeGenerator() {
  const [showQrCode, setShowQrCode] = useState(false);
  const ExternalLink = "https://linktr.ee/DevTO";


  return (
    <Container>
      {/* Link ou botão para abrir o QR Code */}
      <ButttoMobile
        onClick={() => setShowQrCode(true)}>
          <img src={Mobile}/>
        Mobile
      </ButttoMobile>

      {/* Modal simples */}
      {showQrCode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>Versão Moblie</h3>
            <QRCodeCanvas
              value={ExternalLink}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
            <br />
            <ButtonQrCode
              onClick={() => setShowQrCode(false)}>
              Fechar
            </ButtonQrCode>
          </div>
        </div>
      )}
    </Container>
  );
}