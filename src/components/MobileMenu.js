import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const StyledMenu = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 10rem;
  background: green;
  display: ${props => props.show};
  flex-direction: column;
  a {
    text-decoration: none;
    background: ${({ theme }) => theme.color.details};
    color: ${({ theme }) => theme.color.text};
    font-size: 2rem;
  }
`

export default function MobileMenu({ display }) {
  return (
    <StyledMenu show={display}>
      <Link to="/">Home</Link>
      <Link to="/orari">Orari</Link>
      <Link to="/prezzi">Prezzi</Link>
      <Link to="/galleria">Galleria</Link>
      <Link to="/contatti">Contatti</Link>
    </StyledMenu>
  )
}
