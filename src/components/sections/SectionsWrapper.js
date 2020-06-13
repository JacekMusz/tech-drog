import React from "react"

import styled from "styled-components"
import SectionStart from "./1start"
import SectionAbout from "./2about"
import SectionReferences from "./4references"
import SectionContact from "./5contact"
import SectionFooter from "./6footer"

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`

const SectionsWrapper = props => {
  return (
    <AppWrapper id="start">
      <SectionStart fluid={props.data.image1.childImageSharp.fluid} />
      <SectionAbout fluid={props.data.image2.childImageSharp.fluid} />
      <SectionReferences />
      <SectionContact />
      <SectionFooter />
    </AppWrapper>
  )
}

export default SectionsWrapper
