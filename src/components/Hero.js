import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "../components/Hamburger"
import styled from "styled-components"

export const StyledIndex = styled.div`
  .heroimg {
    opacity: 40%;
  }
  .herowrap {
    z-index: 1;
    background: black;
    .herotxt {
      position: absolute;
      top: 20%;
      text-align: center;
      width: 100%;
      color: ${({ theme }) => theme.color.background};
      font-family: ${({ theme }) => theme.fonts.header};
      font-size: 2rem;
    }
  }
`
export default function Hero() {
  return (
    <StyledIndex>
      <div className="herowrap">
        <StaticImage
          className="heroimg"
          src="../images/hero2.jpg"
          alt="Mosta Saloon Hero"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div className="herotxt">
          <h1 className="">MOSTA SALOON</h1>
          <p className="herop">389 420 7885</p>
        </div>
      </div>

      <Hamburger />
    </StyledIndex>
  )
}
