import React from "react"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Section = styled.section`
  height: 30vh;
  background-color: black;
  width: 100%;
  z-index: 20;
  padding: 30px;
  position: relative;
  color: white;
  display: flex;
  justify-content: space-around;
`
const StyledAdrress = styled.address`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-right: 20%;
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    color: #777;
    line-height: 24px;
  }
`

const sectionFooter = () => {
  return (
    <Section>
      <StyledAdrress>
        <h3>Dane firmy</h3>
        <p>
          "Tech-Drog" Arkadiusz Pydzik
          <br />
          ul. Gen. Augusta Emila Fieldorfa-Nila 30/28
          <br />
          96-300 Żyrardów
        </p>
      </StyledAdrress>
      <StyledAdrress>
        <h3>Kontakt</h3>
        <p>
          <FaPhone /> 665 633 933
          <br />
          <FiMail /> biuro@tech-drog.pl
        </p>
      </StyledAdrress>
    </Section>
  )
}

export default sectionFooter
