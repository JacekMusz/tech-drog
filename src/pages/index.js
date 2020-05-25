import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../assets/style/globalStyle"
import Navigation from "../components/navigation/navigation"
import SectionStart from "../components/sections/1start"
import SectionAbout from "../components/sections/2about"
import SectionReferences from "../components/sections/4references"
import SectionContact from "../components/sections/5contact"
import SectionFooter from "../components/sections/6footer"

export const query = graphql`
  {
    image1: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(name: { eq: "background" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`

const IndexPage = props => (
  <>
    <GlobalStyle />
    <Navigation />
    <AppWrapper id="start">
      <SectionStart fluid={props.data.image1.childImageSharp.fluid} />
      <SectionAbout fluid={props.data.image2.childImageSharp.fluid} />
      <SectionReferences />
      <SectionContact />
      <SectionFooter />
    </AppWrapper>
  </>
)

export default IndexPage
