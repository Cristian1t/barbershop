import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Carousel from "react-elastic-carousel"
import styled from "styled-components"

const StyledCarousel = styled(Carousel)`
  .rec.rec-arrow {
    background: ${({ theme }) => theme.color.details};
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`
const ImageWrapperCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.color.text};
  width: 400px;
  height: 100%;
  padding: 0;
  margin: 0;
`
function Galleria() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    // { width: 1450, itemsToShow: 5 },
    // { width: 1750, itemsToShow: 6 },
  ]
  return (
    <div id="galleria">
      <h1 style={{ textAlign: "center" }}>Galleria</h1>
      <StyledCarousel breakPoints={breakPoints}>
        <ImageWrapperCarousel>
          <StaticImage
            src="../images/hair2.jpg"
            alt="Mosta Saloon Hero"
            layout="constrained"
          />
        </ImageWrapperCarousel>
        <ImageWrapperCarousel>
          <StaticImage
            src="../images/hair1.jpg"
            alt="Mosta Saloon Hero"
            layout="constrained"
          />
        </ImageWrapperCarousel>
        <ImageWrapperCarousel>
          <StaticImage
            src="../images/hair3.jpg"
            alt="Mosta Saloon Hero"
            layout="constrained"
          />
        </ImageWrapperCarousel>
        <ImageWrapperCarousel>
          <StaticImage
            src="../images/hair4.jpg"
            alt="Mosta Saloon Hero"
            layout="constrained"
          />
        </ImageWrapperCarousel>
      </StyledCarousel>
    </div>
  )
}

export default Galleria
