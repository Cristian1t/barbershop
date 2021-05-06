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
      top: 10%;
      text-align: center;
      width: 100%;
      color: ${({ theme }) => theme.color.background};
      font-family: ${({ theme }) => theme.fonts.header};
      font-size: 2rem;
      text-shadow: 1px 1px 1px red;
      animation: slideInFromBottom 2s ease;
      @media (min-width: 768px) {
        font-size: 2.5rem;
        top: 20%;
        width: 80%;
      }
      .herop2 {
        a {
          color: inherit;
          text-decoration: none;
          background: ${({ theme }) => theme.color.details};
          width: 60%;
          margin: 0 auto;
          :hover {
            background: ${({ theme }) => theme.color.text};
            cursor: pointer;
            font-size: 3rem;
          }
          @media (min-width: 768px) {
            width: 20%;
          }
        }
      }
      .whatsapp {
        :hover {
          cursor: pointer;
          padding: 2rem;
        }
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
          <p className="herop">Prenota al numero</p>
          <p className="herop2">
            <a href="tel:389 420 7885">389 420 7885</a>
          </p>
          <p className="herop">Anche su Whatsapp</p>

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
