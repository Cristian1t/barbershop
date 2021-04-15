import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const StyledMenu = styled.div`
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
    border-radius: 1rem;
    animation: grow 1s ease;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px ${({ theme }) => theme.color.text};
    box-shadow: 2px 2px ${({ theme }) => theme.color.details};
  }
`

export default function MobileMenu({ display }) {
  return (
    <StyledMenu show={display}>
      <Link to="/orari">Orari</Link>
      <Link to="/prezzi">Prezzi</Link>
      <Link to="/galleria">Galleria</Link>
      <Link to="/contatti">Contatti</Link>
    </StyledMenu>
  )
}