import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Recaptcha from "react-recaptcha"
import { FaTimes, FaCheck } from "react-icons/fa"
import { yellowColor } from "./../../assets/colors"
import scrollTo from "gatsby-plugin-smoothscroll"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 50vh 0 10vh 0;
  position: relative;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContactFormWrapper = styled.div`
  width: 80%;
  max-width: 1024px;
  min-height: 50vh;
  background-color: rgba(12, 12, 12, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 0 0 6px -1px black;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact__rodo-text {
    font-size: 8px;
    width: 80%;
  }
  .invalid-form-information {
    color: red;
    font-size: 12px;
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
  }
`

const Title = styled.h3`
  display: block;
  font-size: 16px;
  margin-bottom: 40px;
  border-left: 5px solid ${yellowColor};
  padding: 10px 5px;
  @media (min-width: 359px) {
    font-size: 17px;
  }
  @media (min-width: 410px) {
    font-size: 20px;
  }
  @media (min-width: 767px) {
    font-size: 22px;
  }
  @media (min-width: 1199px) {
    font-size: 24px;
  }
`

const StyledInput = styled.input`
  margin-bottom: 20px;
  display: block;
  border: none;
  background: #141414;
  font-size: 12px;
  box-shadow: 0 0 6px -1px black;
  color: white;
  height: ${({ as }) => (as ? "300px" : "auto")};
  width: ${({ as }) => (as ? "40vw" : "25vw")};
  min-width: 200px;
  border-bottom: 1px solid gray;
  resize: none;
  &:focus {
    border-bottom: 1px solid ${yellowColor};
    outline: none;
    color: ${yellowColor};
    background: #141414;
  }
  @media (min-width: 359px) {
    min-width: ${({ as }) => (as ? "90%" : "200px")};
  }
  @media (min-width: 410px) {
    height: ${({ as }) => (as ? "400px" : "auto")};
    min-width: ${({ as }) => (as ? "90%" : "200px")};
  }
  @media (min-width: 767px) {
    height: ${({ as }) => (as ? "500px" : "auto")};
  }
  @media (min-width: 1199px) {
    height: ${({ as }) => (as ? "600px" : "auto")};
  }
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
  display: block;
  font-size: 12px;
  font-weight: bold;
  align-self: left;
  @media (min-width: 410px) {
    font-size: 14px;
  }
  @media (min-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 1199px) {
    font-size: 18px;
  }
`
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .email-input-icon {
    margin-left: 10px;
    transition: 0.5s;
    opacity: ${({ emailLength }) => (emailLength > 1 ? 1 : 0)};
  }
  .correct {
    color: green;
  }
  .incorrect {
    color: red;
  }
`
const Button = styled.button`
  border: 1px solid #666;
  padding: 5px;
  background-color: transparent;
  color: white;
  margin: 20px 0;
  min-width: 150px;
  cursor: pointer;
  transition: 0.5s;
  color: ${yellowColor};
  &:hover {
    color: ${yellowColor};
    border: 1px solid ${yellowColor};
    background-color: black;
  }
  &:disabled {
    color: #444;
    border: 1px solid #444;
    &:hover {
      color: #444;
      border: 1px solid #444;
      background-color: transparent;
      :after {
        position: absolute;
        display: block;
        font-size: 10px;
        content: "Formularz nie został wypełniony poprawnie";
        color: red;
        transform: translateY(10px);
        right: 0;
      }
    }
    @media (min-width: 767px) {
      width: 200px;
    }
    @media (min-width: 1199px) {
      width: 300px;
    }
  }
`

const Rodo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .contact__rodo-text {
    width: 100%;
    font-size: 6px;
    @media (min-width: 767px) {
      font-size: 8px;
    }
  }
`

const StyledInputCheckbox = styled.input`
  margin-top: 10px;
  width: 20px;
`

const OffsetDiv = styled.div`
  height: 50px;
`

const SectionContact = () => {
  const [emailValue, setEmailValue] = useState("")
  const [emailCorrect, setEmailCorrect] = useState(false)
  const [textAreaCorrect, setTextAreaCorrect] = useState(false)
  const [invalidSigns, setInvalidSigns] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [reCaptchaValidation, setReCaptchaValidation] = useState(false)
  const [normalRecaptcha, setNormalRecaptcha] = useState("false")

  const handleChangeEmailInput = e => {
    setEmailValue(e.target.value)
    setEmailCorrect(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
    )
    console.log(textAreaCorrect, emailCorrect)
  }

  const handleChangeTextAreaInput = e => {
    const textAreaProperSigns = []
    ;[...e.target.value].forEach(sign =>
      textAreaProperSigns.push(/^[a-zA-Z0-9ąćśńółę.,()_%+-]/i.test(sign))
    )
    if (textAreaProperSigns.includes(false)) {
      setInvalidSigns(true)
    } else {
      setInvalidSigns(false)
    }
    if (e.target.value.length > 5 && !textAreaProperSigns.includes(false)) {
      setTextAreaCorrect(true)
    } else {
      setTextAreaCorrect(false)
    }
  }

  var verifyCallback = function (response) {
    if (response) {
      setReCaptchaValidation(true)
    }
  }
  useEffect(() => {
    console.log()
    if (window !== undefined) {
      if (window.innerWidth > 410) {
        setNormalRecaptcha(true)
      } else {
        setNormalRecaptcha(false)
      }
    }
  })
  return (
    <Section>
      <OffsetDiv id="contact"></OffsetDiv>
      <ContactFormWrapper>
        <Title>Napisz do nas !</Title>
        <form
          className="form"
          action="https://formspree.io/mjvawblo"
          type="email"
          method="POST"
        >
          <StyledLabel>Twój email:</StyledLabel>

          <StyledInputWrapper emailLength={emailValue.length}>
            <StyledInput
              onChange={e => handleChangeEmailInput(e)}
              type="text"
              name="_replyto"
            ></StyledInput>
            {emailCorrect ? (
              <FaCheck className="email-input-icon correct" />
            ) : (
              <FaTimes className="email-input-icon incorrect" />
            )}
          </StyledInputWrapper>
          <StyledLabel>Twoja wiadomość:</StyledLabel>
          <StyledInput
            onChange={e => handleChangeTextAreaInput(e)}
            as="textarea"
            type="text"
            name="message"
          ></StyledInput>
          {invalidSigns ? (
            <div className="invalid-form-information">
              W wiadomości użyto niedozwolonych znaków specjalnych.
              <br />
              Znaki specjalne jakie możesz użyć to:. , ( ) _ / % + - :
            </div>
          ) : null}
          <Rodo>
            <StyledInputCheckbox
              onChange={() => setCheckbox(!checkbox)}
              className="contact__rodo-checkbox"
              type="checkbox"
            ></StyledInputCheckbox>
            <StyledLabel className="contact__rodo-text">
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o
              ochronie danych osobowych w związku z wysłaniem zapytania przez
              formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
              przysługuje mi prawo dostępu do moich danych, możliwość
              poprawiania ich oraz zażądania zaprzestania ich przetwarzania
              poprzez bezpośredni kontakt (telefoniczny lub korespondencyjny) z
              Administaratorem danych osobowych. Administratorem danych
              osobowych jest firma TECH-DROG Arkadiusz Pydzik ul. Gen. Augusta
              Emila Fieldorfa-Nila 30/28 96-300 Żyrardów{" "}
            </StyledLabel>
          </Rodo>
          <Recaptcha
            sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} /// .env
            render="explicit"
            verifyCallback={verifyCallback}
            theme="dark"
            size={normalRecaptcha ? "normal" : "compact"}
          />
          <Button
            disabled={
              !textAreaCorrect ||
              !emailCorrect ||
              !checkbox ||
              !reCaptchaValidation
            }
            type="submit"
            onClick={() => alert("wysłano maila")}
          >
            Wyślij
          </Button>
        </form>
        <Button onClick={() => scrollTo("#footer")}>
          Zobacz pełne dane kontaktowe
        </Button>
      </ContactFormWrapper>
    </Section>
  )
}

export default SectionContact
