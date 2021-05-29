import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const StyledContatti = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  .images {
    display: flex;
    flex-direction: column;
    @media (min-width: 769px) {
      display: flex;
      flex-direction: row-reverse;
    }
    .firstimage {
      width: 80%;
      border: 2px solid ${({ theme }) => theme.color.details};
      border-bottom: none;
      align-self: center;
      @media (min-width: 769px) {
        border-bottom: 2px solid ${({ theme }) => theme.color.details};
      }
    }
    .secondimage {
      border: 2px solid ${({ theme }) => theme.color.details};
    }
  }
`
function Contatti() {
  return (
    <StyledContatti id="contatti">
      <h1> Contatti </h1>

      <div className="images">
        <StaticImage
          className="firstimage"
          src="../images/mapsdetails.jpg"
          alt="map details"
          layout="constrained"
        />
        <StaticImage
          className="secondimage"
          src="../images/map.jpg"
          alt="map details"
          layout="constrained"
        />
      </div>
    </StyledContatti>
  )
}

export default Contatti
