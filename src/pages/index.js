import React from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/style/globalStyle"
import SectionStart from "../components/sections/1start"
import SectionAbout from "../components/sections/2about"
import SectionServices from "../components/sections/3services"
import SectionReferences from "../components/sections/4references"
import SectionContact from "../components/sections/5contact"
import SectionFooter from "../components/sections/6footer"

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: coral;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      Hello People
      <SectionStart />
      <SectionAbout />
      <SectionServices />
      <SectionReferences />
      <SectionContact />
      <SectionFooter />
    </AppWrapper>
  </>
)

export default IndexPage
