import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NavStyle = styled.nav`
  /* left: 50%; */
  /* transform: translate(-50%, 0); */
  position: sticky;
  z-index: 1;
  top: 0.3rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
  }
  .links {
    display: none;
    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`

export default function Navbar() {
  return (
    <>
      <NavStyle>
        <Link to="/">
          <StaticImage
            className="logo"
            src="../images/logo.svg"
            alt="Mosta Saloon"
            placeholder="blurred"
            layout="constrained"
            width={130}
          />
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/orari">Orari</Link>
          <Link to="/prezzi">Prezzi</Link>
          <Link to="/galleria">Galleria</Link>
          <Link to="/contatti">Contatti</Link>
        </div>
      </NavStyle>
    </>
  )
}
