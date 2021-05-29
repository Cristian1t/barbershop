import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const StyledPrezzi = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  @media (min-width: 769px) {
    align-self: center;
    width: 80%;
  }
`

function Prezzi() {
  return (
    <StyledPrezzi id="prezzi">
      <h1 style={{ textAlign: "center" }}>Prezzi</h1>
      <StaticImage
        src="../images/prezzi.jpg"
        layout="constrained"
        alt="prezzi"
        width={500}
      />
    </StyledPrezzi>
  )
}

export default Prezzi
