import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { GlobalStyles } from "./GlobalStyles"

const mainTheme = {
  color: {
    background: "#F6E2E2",
    details: "#c63232",
    text: "#601d1d",
    details2: "#2C1D1D",
  },
  fonts: {
    header: "Space Mono",
    copy: "Source Sans Pro",
  },
}

function Theme({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>
  )
}

export default Theme
