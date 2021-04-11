import React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"
import styled from "styled-components"

export const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1rem;
  @media (min-width: 768px) {
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
    </LayoutStyles>
  )
}

export default Layout
