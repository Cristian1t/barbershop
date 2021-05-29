import React from "react"
import Contatti from "../components/Contatti"
import Galleria from "../components/Galleria"
import Hero from "../components/Hero"
import Orario from "../components/Orario"
import Prezzi from "../components/Prezzi"

export default function Home() {
  return (
    <>
      <Hero />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Orario />
        <Galleria />
        <Prezzi />
        <Contatti />
      </div>
    </>
  )
}
