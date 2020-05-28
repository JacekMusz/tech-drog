import React from "react"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Section = styled.section`
  min-height: 20vh;
  background-color: #121212;
  width: 100%;
  z-index: 20;
  padding: 0;
  position: relative;
  color: white;
  display: flex;
  justify-content: space-around;
`
const StyledAdrress = styled.address`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px;
  .adrress-icon {
    color: white;
    margin-right: 10px;
  }
  h3 {
    font-size: 12px;
  }
  p {
    font-size: 10px;
    color: #777;
    line-height: 14px;
  }

  @media (min-width: 410px) {
    margin: 20px;
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 11px;
      color: #777;
      line-height: 15px;
    }
  }
  /* Media for iPad (768px) */
  @media (min-width: 767px) {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
      color: #777;
      line-height: 16px;
    }
  }
  @media (min-width: 1199px) {
    @media (min-width: 767px) {
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        color: #777;
        line-height: 18px;
      }
    }
  }
  @media (min-width: 1599px) {
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
          <FaPhone className="adrress-icon" /> 665 633 933
          <br />
          <br />
          <FiMail className="adrress-icon" />
          biuro@tech-drog.pl
        </p>
      </StyledAdrress>
    </Section>
  )
}

export default sectionFooter
