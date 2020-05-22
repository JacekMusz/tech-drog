import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    font-family: "Montserrat";
    color: white;
}

*, *::hover, *::after{
    box-sizing: inherit;
}


`

export default GlobalStyle
