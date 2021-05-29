import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

export const StyledMenu = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  position: absolute;
  bottom: 4rem;
  width: 10rem;
  display: ${props => props.show};
  flex-direction: column;

  a {
    text-decoration: none;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-size: 1.8rem;
    /* border-radius: 1rem; */
    /* animation: sl 1s ease; */
    display: flex;
    justify-content: center;
    border: solid 1px ${({ theme }) => theme.color.text};
    /* box-shadow: 2px 2px ${({ theme }) => theme.color.details}; */
    :active {
      background: ${({ theme }) => theme.color.details};
    }
  }
  .link1 {
    animation: slideInFromLeft 400ms ease;
  }
  .link2 {
    animation: slideInFromLeft 300ms ease;
  }
  .link3 {
    animation: slideInFromLeft 200ms ease;
  }
  .link4 {
    animation: slideInFromLeft 100ms ease;
  }
`

export default function MobileMenu({ display }) {
  return (
    <StyledMenu show={display}>
      <Link
        className="link1"
        to="orari"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Orari
      </Link>
      <Link
        className="link2"
        to="galleria"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Galleria
      </Link>
      <Link
        className="link3"
        to="prezzi"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Prezzi
      </Link>
      <Link
        className="link4"
        to="contatti"
        smooth={true}
        duration={1000}
        offset={-100}
      >
        Contatti
      </Link>
    </StyledMenu>
  )
}
