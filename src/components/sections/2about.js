import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import SectionServices from "../../components/sections/3services"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 20;
  position: relative;
  margin-top: 100vh;
  color: white;
`

const LeftDecoration = styled.div`
  margin-left: 20px;
  width: 10%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  span {
    display: block;
    height: 100%;
    width: 25%;
    margin-left: 20%;
    background-color: yellow;
    opacity: 0.4;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
  height: 200vh;
  opacity: 0.2;
`

const SectionContent = styled.div`
  position: absolute;
  top: 0;
  color: black;
`

const SectionTitle = styled.h2`
  display: block;
  position: relative;
  margin-left: 10%;
  font-size: 2.5rem;
  width: 50%;
  padding: 0;
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: yellow;
    bottom: 0px;
    transform: translateX(-20%);
  }
`

const Article_1 = styled.div`
  width: 84%;
  padding: 7%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
`

const sectionAbout = props => {
  return (
    <Section>
      <StyledImage fluid={props.fluid} />
      <SectionContent id="about" className="content">
        <SectionTitle>O nas</SectionTitle>
        <Article_1>
          {" "}
          Biuro projektowe „Tech-Drog” Arkadiusz Pydzik powstało 2008 roku.
          Świadczymy usługi w zakresie projektowania infrastruktury drogowej dla
          inwestorów prywatnych jak i publicznych. Realizujemy zlecenia na
          terenie województwa mazowieckiego jak i łódzkiego. Firma współpracuje
          z wykwalifikowanymi specjalistami z branży drogowej jak i branż
          infrastruktury towarzyszącej:{" "}
          <ul>
            <li> wodno-kanalizacyjnej</li>
            <li> energetycznej</li>
            <li> teletechnicznej</li>
            <li>gazowej</li>
          </ul>
        </Article_1>
        <SectionServices />
      </SectionContent>

      {/* <LeftDecoration>
        <span></span>
        <span></span>
      </LeftDecoration> */}
    </Section>
  )
}

export default sectionAbout
