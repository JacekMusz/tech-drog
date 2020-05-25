import React from "react"
import styled from "styled-components"

const Section = styled.section`
  min-height: 150vh;
  width: 100%;
  padding: 50vh 10vw;
  position: relative;
  z-index: 500;
`
const ContactFormWrapper = styled.div`
  width: 80%;
  min-height: 50vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact-form__input-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .form {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #888;
      margin: 10px;
      color: white;
      outline: none;
      cursor: pointer;
      &:focus {
        color: yellow;
        border-bottom: 1px solid yellow;
      }
    }
  }
`
const sectionContact = () => {
  return (
    <div id="contact">
      <Section>
        <ContactFormWrapper>
          <h2>Czekamy na wiadomość od Ciebie</h2>
          <form className="form" method="post" action="#">
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="15" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
        </ContactFormWrapper>
      </Section>
    </div>
  )
}

export default sectionContact
