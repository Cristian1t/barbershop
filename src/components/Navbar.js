import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.text};
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
  box-shadow: 0 0.2rem 0.2rem ${({ theme }) => theme.color.details};

  @media (min-width: 769px) {
    justify-content: space-between;
    width: 80%;
    height: 6rem;
    border-radius: 0;
  }

  .logo {
    cursor: pointer;
    width: 5rem;
    @media (min-width: 769px) {
      width: 6rem;
      margin-left: 1rem;
      margin-top: 0.2rem;
    }
    :hover {
      /* box-shadow: 0 0.1rem 0.2rem ${({ theme }) =>
        theme.color.background}; */
    }
  }
  .links {
    display: none;
    @media (min-width: 769px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 2rem;
      color: ${({ theme }) => theme.color.details};
      font-size: 2rem;
      font-family: ${({ theme }) => theme.fonts.header};
    }
    a {
      padding: 2rem;
      :hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.background};
        cursor: pointer;
      }
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
            alt="Mosta Saloon logo"
            placeholder="blurred"
            layout="constrained"
          />
        </Link>
        <div className="links">
          <Link to="orari" smooth={true} duration={1000} offset={-100}>
            Orari
          </Link>
          <Link to="galleria" smooth={true} duration={1000} offset={-100}>
            Galleria
          </Link>
          <Link to="prezzi" smooth={true} duration={1000} offset={-100}>
            Prezzi
          </Link>
          <Link to="contatti" smooth={true} duration={1000} offset={-100}>
            Contatti
          </Link>
        </div>
      </NavStyle>
    </>
  )
}
