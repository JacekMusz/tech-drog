import React from "react"
import styled from "styled-components"
import { Formik } from "formik"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 50vh 10vw 10vh 10vw;
  position: relative;
  z-index: 500;
`
const ContactFormWrapper = styled.div`
  width: 80%;
  min-height: 50vh;
  background-color: rgba(12, 12, 12, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 6px -1px black;
`

const StyledInput = styled.input`
  margin-left: 10px;
  display: block;
  border: none;
  background: #141414;
  font-size: 20px;
  box-shadow: 0 0 6px -1px black;
  color: white;
  height: ${({ as }) => (as ? "200px" : "auto")};
  width: ${({ as }) => (as ? "40vw" : "25vw")};
  min-width: 200px;
  margin-bottom: ${({ as }) => as && "40px"};
  border-bottom: 1px solid gray;
  resize: none;
  &:focus {
    border-bottom: 1px solid yellow;
    outline: none;
    color: yellow;
  }
  @media (min-width: 410px) {
    height: ${({ as }) => (as ? "300px" : "auto")};
  }
  @media (min-width: 767px) {
    height: ${({ as }) => (as ? "400px" : "auto")};
  }
  @media (min-width: 1199px) {
    height: ${({ as }) => (as ? "500px" : "auto")};
  }
`

const StyledLabel = styled.label`
  margin: 30px 10px 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
`

const Button = styled.button`
  margin-left: 10px;
  border: 1px solid grey;
  padding: 5px;
  background-color: transparent;
  color: white;
  margin-bottom: 50px;
  min-width: 150px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: yellow;
    border: 1px solid yellow;
    background-color: black;
  }
  @media (min-width: 767px) {
    width: 200px;
  }
`

const sectionContact = () => {
  return (
    <div id="contact">
      <Section>
        <ContactFormWrapper>
          <h2>Czekamy na wiadomość od Ciebie</h2>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            // validate={values => {
            //   const errors = {}
            //   if (!values.email) {
            //     errors.email = "Required"
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address"
            //   }
            //   return errors
            // }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <StyledLabel htmlFor="name">Twoje imię:</StyledLabel>
                <StyledInput
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <StyledLabel htmlFor="e-mail">Twój adres e-mail</StyledLabel>
                <StyledInput
                  id="email"
                  type="e-mail"
                  name="email "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <StyledLabel>Twoja wiadomość</StyledLabel>
                <StyledInput
                  as="textarea"
                  type="text"
                  name="message"
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <Button>Send message</Button>
              </form>
            )}
          </Formik>
        </ContactFormWrapper>
      </Section>
    </div>
  )
}

export default sectionContact
