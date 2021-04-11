import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const NavStyle = styled.nav``

export default function Navbar() {
  return (
    <NavStyle>
      <StaticImage
        className="logo"
        src="../images/logo.png"
        alt="Mosta Saloon"
        placeholder="blurred"
        layout="constrained"
      />
      {/* <div className="links">
        <Link to="/">Home</Link>
        <Link to="/orari">Orari</Link>
        <Link to="/prezzi">Prezzi</Link>
        <Link to="/galleria">Galleria</Link>
        <Link to="/contatti">Contatti</Link>
      </div> */}
    </NavStyle>
  )
}
