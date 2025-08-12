import Avatar from "../../assets/AvatarTO.PNG";
import Tiago from "../../assets/Tiago.PNG";
import { useState } from "react";
import { ImageAvatar } from "./styles";


function ImgAvatar() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const onMouseEnter = () => {
    setIsMouseOver(true);
  };
  const onMouseLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isMouseOver ? (
        <ImageAvatar
          src={Tiago}
          alt="Imagem ao passar o mouse"
        />
      ) : (
        <ImageAvatar src={Avatar} alt="Imagem padrão" />
      )}
    </div>
  );
}

export default ImgAvatar;