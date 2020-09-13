import React from "react"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import LogoAndName from "./../../assets/svg/logo-i-napis.svg"

const Section = styled.section`
  position: relative;

  background-color: #121212;
  width: 96%;
  z-index: 20;
  padding: 0 2% 5% 2%;
  position: relative;
  color: white;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (min-width: 360px) {
    padding: 0 5% 5% 5%;
    width: 90%;
  }
  @media (min-width: 767px) {
    padding: 0 10% 5% 10%;
    width: 80%;
  }
`
const StyledAdrress = styled.address`
  display: flex;
  flex-direction: column;
  width: 48%;
  padding-top: 10px;
  .adrress-icon {
    color: white;
    margin-right: 10px;
  }
  h4 {
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    margin: 0;
  }
  p {
    font-size: 12px;
    color: #ddd;
    line-height: 16px;
  }

  @media (min-width: 360px) {
    width: 45%;
    h4 {
      font-size: 18px;
    }
  }

  @media (min-width: 410px) {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
      line-height: 15px;
    }
  }
  @media (min-width: 767px) {
    width: 40%;
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
  @media (min-width: 1199px) {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
      line-height: 21px;
    }
  }
  @media (min-width: 1599px) {
    h4 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`

const CopyrightWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 8px;
`

const sectionFooter = () => {
  return (
    <Section>
      <StyledAdrress>
        <LogoAndName />
        <p>
          "Tech-Drog" Arkadiusz Pydzik
          <br />
          ul. Gen. Augusta Emila Fieldorfa-Nila 30/28
          <br />
          96-300 Żyrardów
          <br />
          <br />
          NIP: 8381635750
          <br />
          REGON: 141518302
        </p>
      </StyledAdrress>
      <StyledAdrress>
        <h4>Kontakt</h4>
        <p>
          <FaPhone className="adrress-icon" /> 665 633 933
          <br />
          <br />
          <FiMail className="adrress-icon" />
          biuro@tech-drog.pl
        </p>
      </StyledAdrress>
      <CopyrightWrapper>
        &copy; Copyright 2020, Tech-Drog Arkadiusz Pydzik
      </CopyrightWrapper>
    </Section>
  )
}

export default sectionFooter
