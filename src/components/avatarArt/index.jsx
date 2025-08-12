
import { useState, useEffect } from 'react';


  const AvatarArtRotator = ({ images = [], interval = 3000, style = {} }) => {
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
    <img
      src={images[currentIndex]}
      alt="Avatar rotativo"
      style={{
        margin:"auto",
        width: "230px",
        height: "230px",
        borderRadius: "20%",
        transition: "transform 0.5s, opacity 0.3s ease-in-out",
        opacity: fade ? 1 : 0,
        display: "block",
       
        ...style,
      }}
    />
  );  
}

export default AvatarArtRotator;



 

