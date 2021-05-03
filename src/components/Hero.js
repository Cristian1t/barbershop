import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const StyledIndex = styled.div`
  .heroimg {
    opacity: 40%;
    height: 100vh;
  }
  .herowrap {
    z-index: 2;
    background: black;
    height: 100vh;
    .herotxt {
      position: absolute;
      top: 20%;
      text-align: center;
      width: 100%;
      color: ${({ theme }) => theme.color.background};
      font-family: ${({ theme }) => theme.fonts.header};
      font-size: 2rem;
      text-shadow: 1px 1px 1px red;
      .whatsapp {
      }
    }
  }
`
export default function Hero() {
  return (
    <StyledIndex id="hero">
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
          <a href="http://wa.me/+393894207885">
            <StaticImage
              className="whatsapp"
              src="../images/whatsapp.svg"
              alt="Whatsappimage"
              placeholder="blurred"
              layout="constrained"
              width={80}
            />
          </a>
        </div>
      </div>
    </StyledIndex>
  )
}
