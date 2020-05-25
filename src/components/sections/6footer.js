import React from "react"
import styled from "styled-components"
const Section = styled.section`
  height: 20vh;
  background-color: black;
  width: 100%;
  z-index: 20;
  position: relative;
  color: white;
`

const sectionFooter = () => {
  return (
    <Section>
      Kontakt "Tech-Drog" Arkadiusz Pydzik ul. Gen. Augusta Emila Fieldorfa-Nila
      30/28 96-300 Żyrardów woj. mazowieckie tel.: 665 633 933 e-mail:
      biuro@tech-drog.pl www.tech-drog.pl
    </Section>
  )
}

export default sectionFooter
