import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"
import styled from "styled-components"
import Hamburger from "../Hamburger"

export const LayoutStyles = styled.div`
  @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }
`

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Navbar />
      <main>{children}</main>

      <Footer />
      <Hamburger />
    </LayoutStyles>
  )
}

export default Layout
