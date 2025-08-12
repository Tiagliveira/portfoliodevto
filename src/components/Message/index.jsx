
import { TextCursor, DefautlText } from "./styles";
import { useState, useEffect } from "react"

const DictatingText = ({ text, speed= 100, style = {} }) => {
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");

     useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
}, [index, text, speed]); 
  
return(
    <DefautlText  style={{...style }}>
        {currentText}
        <TextCursor className="cursor">|</TextCursor>
    </DefautlText>            

);
}
 
export default DictatingText;

