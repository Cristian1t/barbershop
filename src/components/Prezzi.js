import { StaticImage } from "gatsby-plugin-image"
import React from "react"

function Prezzi() {
  return (
    <div
      id="prezzi"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Prezzi</h1>
      <StaticImage src="../images/prezzi.jpg" layout="fixed" width={400} />
    </div>
  )
}

export default Prezzi
