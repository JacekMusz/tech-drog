import React from "react"
import styled from "styled-components"

const Section2 = styled.section`
  min-height: 100vh;
  width: 100%;
  margin-top: 40vh;
  padding-top: 10vh;
  position: relative;
  z-index: 400;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
`

const SectionReferences = () => {
  return (
    <Section2 id="references">
      <h2>Współpraca</h2>
      <p>
        Współpracujemy zarówno z klientami indywidualnymi, firmami oraz
        instytucjami publicznymi
      </p>
      <h3>Zaufali już nam między innymi:</h3>
      <ul>
        <li>SKANSKA S.A.</li>
        <li>STRABAG Sp. z o.o.</li>
        <li>EUROVIA POLSKA S. A.</li>
        <li>PKP Energetyka S.A.</li>
        <li>DELTA S. A.</li>
        <li>DROGOMEX Sp. z o.o.</li>
        <li>EL-KOL Sp. z o.o.</li>
        <li>EUROVIA POLSKA S. A.</li>
        {/* <li>„FAL-BRUK” Sp. z o.o. spółka komandytowa</li>
        <li>„GAZ” Sp. z o.o.</li>
        <li>GLOBAL PARKS POLAND Sp. z o.o.</li>
        <li>„INSTALBUD” Sp. z o.o.</li>
        <li>MABAU Polska Sp. z o.o.</li>
        <li>MILLSEN Sp. z o.o.</li>
        <li>Mimatech Sp. z o.o.</li> */}
        <li>Miasta i gminy z terenu powiatu żyrardowskiego i grodziskiego</li>
        <li>Mazowiecki Zarząd Dróg Wojewódzkich w Warszawie</li>
      </ul>

      <div>Zapraszamy do kontaktu !</div>
    </Section2>
  )
}

export default SectionReferences
