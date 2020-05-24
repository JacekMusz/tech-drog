import React from "react"
import styled from "styled-components"

import VisibilitySensor from "react-visibility-sensor"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
`

function onChange(isVisible) {
  console.log("Element is now %s", isVisible ? "visible" : "hidden")
}

const sectionContact = () => {
  return (
    <div id="contact">
      <Section>
        contact
        <VisibilitySensor onChange={onChange}>
          <div>...content goes here...</div>
        </VisibilitySensor>
      </Section>
    </div>
  )
}

export default sectionContact
