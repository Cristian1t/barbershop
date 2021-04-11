import React from "react"
import styled from "styled-components"

export const FooterStyles = styled.footer`
  text-align: center;
  padding: 1rem;
`

function Footer() {
  return (
    <div>
      <FooterStyles>
        Mosta Saloon. {new Date().getFullYear()}, Built with Gatsbyjs.
      </FooterStyles>
    </div>
  )
}

export default Footer
