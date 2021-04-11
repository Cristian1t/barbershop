import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
    margin: 0;
    padding: 0;

    
    @keyframes slideInFromLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
  @keyframes slideInFromRight {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}
}
  h1, h2, h3, p {
    font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
  }
`
