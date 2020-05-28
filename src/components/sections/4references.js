import React from "react"
import styled from "styled-components"

const Section2 = styled.section`
  min-height: 100vh;
  width: 80%;
  margin-top: 50vh;
  padding: 10vh 10%;
  position: relative;
  z-index: 400;
  box-shadow: 0 0 6px -1px black;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  .references__title,
  .references__subtitle {
    &:after {
      content: "";
      display: block;
      height: 5px;
      width: 40%;
      bottom: 0;
      background-color: yellow;
      transform: translateX(-20%);
    }
  }
  p {
    margin: 0 0 20px 0;
  }
  .references__subtitle {
    &:after {
      height: 2px;
    }
  }
  .references__list {
    padding: 0;
    li {
      list-style: none;
      margin-top: 15px;
      margin-bottom: 2px;
      &::after {
        content: "";
        display: block;
        width: 40px;
        height: 1px;
        background-color: yellow;
        transform: translateX(20px);
      }
      &::after {
        transform: translateX(-10px);
      }
    }
  }
`

const SectionReferences = () => {
  return (
    <Section2 id="references">
      <h2 className="references__title">Referencje i realizacje</h2>
      <p>
        Współpracujemy zarówno z klientami indywidualnymi, firmami oraz
        instytucjami publicznymi
      </p>
      <h3 className="references__subtitle">Zaufali już nam między innymi:</h3>
      <ul className="references__list">
        <li>SKANSKA S.A.</li>
        <li>STRABAG Sp. z o.o.</li>
        <li>EUROVIA POLSKA S. A.</li>
        <li>PKP Energetyka S.A.</li>
        <li>DELTA S. A.</li>
        <li>DROGOMEX Sp. z o.o.</li>
        <li>EL-KOL Sp. z o.o.</li>
        <li>EUROVIA POLSKA S. A.</li>
        <li>„GAZ” Sp. z o.o.</li>
        <li>GLOBAL PARKS POLAND Sp. z o.o.</li>
        <li>„INSTALBUD” Sp. z o.o.</li>
        <li>MABAU Polska Sp. z o.o.</li>
        <li>MILLSEN Sp. z o.o.</li>
        <li>Mimatech Sp. z o.o.</li>
        <li>Miasta i gminy z terenu powiatu żyrardowskiego i grodziskiego</li>
        <li>Mazowiecki Zarząd Dróg Wojewódzkich w Warszawie</li>
      </ul>
    </Section2>
  )
}

export default SectionReferences
