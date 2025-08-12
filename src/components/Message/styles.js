import styled  from "styled-components";
 
export const DefautlText = styled.p`
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: center;
`


export const TextCursor = styled.span`
display: inline-block;
width: 2px;
background-color: black;
margin-left: 2px;
animation: blink 1s step-end infinite;

@keyframes blink {
    0% {
        visibility: visible;
    }
    50% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
    
    to{
        visibility: hidden;

    }

}


`