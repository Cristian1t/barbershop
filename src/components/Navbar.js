import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.text};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
  box-shadow: 0 0.2rem 0.2rem ${({ theme }) => theme.color.details};

  .logo {
    width: 5rem;
  }

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
        <Link to="hero" smooth={true} duration={1000}>
          <StaticImage
            className="logo"
            src="../images/logo.png"
            alt="Mosta Saloon"
            placeholder="blurred"
            layout="constrained"
          />
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
        </div>
      </NavStyle>
    </>
  )
}
