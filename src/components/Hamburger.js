import React, { useState } from "react"
import styled from "styled-components"
import MobileMenu from "./MobileMenu"

export const FullMobileMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 1rem;
`

export const StyledSVG = styled.svg`
  background: ${({ theme }) => theme.color.background};
  padding-left: 0.7rem;
  border-radius: 5rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  margin: 0;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 3px 5px 2px ${({ theme }) => theme.color.details};
  cursor: pointer;

  #top,
  #bottom {
    transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #middle {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: ${({ theme }) => theme.color.details};
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
  path {
    stroke-dasharray: 25 41;
    stroke-dashoffset: 0;
  }
  .x#middle {
    opacity: 0;
  }
  .x#top,
  .x#bottom {
    stroke-dashoffset: -41;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

export default function Hamburger() {
  const [isActive, setActive] = useState("false")

  const handleClick = () => {
    setActive(!isActive)
  }

  return (
    <FullMobileMenu>
      <StyledSVG
        onClick={handleClick}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 32 25"
      >
        <path
          id="top"
          className={`line ${!isActive ? "x" : ""}`}
          d="M219.11,177.53l25,.16c1.3.15,6.24-1.72,3.49-4.66s-7.13,2.13-7.13,2.13l-17.79,17.56"
          transform="translate(-219.06 -171.65)"
        />
        <path
          id="bottom"
          className={`line ${!isActive ? "x" : ""}`}
          d="M219.11,190.37l25-.16c1.3-.16,6.24,1.71,3.49,4.65s-7.13-2.12-7.13-2.12l-17.79-17.57"
          transform="translate(-219.06 -171.65)"
        />
        <line
          id="middle"
          className={`line ${!isActive ? "x" : ""}`}
          y1="12.21"
          x2="25"
          y2="12.37"
        />
      </StyledSVG>
      <MobileMenu display={`${!isActive ? "flex" : "none"}`} />
    </FullMobileMenu>
  )
}
