import React from "react"
import styled from "styled-components"

const StyledTable = styled.table`
  margin: 2rem auto;
  width: 90%;
  border: 1px solid black;
  td,
  th {
    border: 1px solid #999;
    padding: 0.5rem;
  }
`

function Orario() {
  return (
    <div id="orari">
      <h1 style={{ textAlign: "center" }}>Orari</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Giorno</th>
            <th>Orario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunedì</td>
            <td>10-18</td>
          </tr>
          <tr>
            <td>Martedì</td>
            <td>8-20:30</td>
          </tr>
          <tr>
            <td>Mercoledì</td>
            <td>8-20:30</td>
          </tr>
          <tr>
            <td>Giovedì</td>
            <td>8-20:30</td>
          </tr>
          <tr>
            <td>Venerdì</td>
            <td>8-20:30</td>
          </tr>
          <tr>
            <td>Sabato</td>
            <td>8-20:30</td>
          </tr>
          <tr>
            <td>Domenica</td>
            <td>Chiuso</td>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  )
}

export default Orario
