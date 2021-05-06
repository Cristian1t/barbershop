import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const StyledPrezzi = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 80%;
    align-self: center;
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
        width={400}
      />
    </StyledPrezzi>
  )
}

export default Prezzi
