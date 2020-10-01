import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    color: black;
    
}

*, *::hover, *::after{
    box-sizing: inherit;
    font-display: swap;
    font-family: "Montserrat";
}
`
