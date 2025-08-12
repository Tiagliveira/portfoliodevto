import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: "Labrada", serif;

        ::-webkit-scrollbar {
            display: none;
        }

        :focus{
            outline: none;
        
        }

        button:focus,
        a:focus{
            outline: none !important;
             box-shadow: none !important;
        }



}
`
