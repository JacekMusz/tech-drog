import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 20;
  position: relative;
  margin-top: 100vh;
  color: white;
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

const ARTICLE_1 = styled.div`
  width: 84%;
  padding: 7%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;
  ul {
    li {
      list-style: none;
      margin-top: 8px;
      margin-bottom: 2px;
      &::after {
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: black;
        transform: translateX(-10px);
      }
    }
  }
`

const ARTICLE_2 = styled.div`
  position: relative;
  .article__title {
    margin-left: 40%;
    text-align: left;
    display: block;
    position: relative;
    margin-right: 10%;
    font-size: 2.2rem;
    width: 70%;
    padding: 0;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 5px;
      width: 100%;
      background-color: yellow;
      bottom: -5px;
      transform: translateX(-10%);
    }
  }
`

const sectionAbout = props => {
  return (
    <Section>
      <StyledImage fluid={props.fluid} />
      <SectionContent id="about" className="content">
        <SectionTitle>O nas</SectionTitle>
        <ARTICLE_1>
          {" "}
          Biuro projektowe „Tech-Drog” Arkadiusz Pydzik powstało 2008 roku.
          Świadczymy usługi w zakresie projektowania infrastruktury drogowej dla
          inwestorów prywatnych jak i publicznych. Realizujemy zlecenia na
          terenie województwa mazowieckiego jak i łódzkiego. Firma współpracuje
          z wykwalifikowanymi specjalistami z branży drogowej jak i branż
          infrastruktury towarzyszącej:{" "}
          <ul>
            <li> wodno-kanalizacyjnej,</li>
            <li> energetycznej,</li>
            <li> teletechnicznej,</li>
            <li> gazowej.</li>
          </ul>
        </ARTICLE_1>
        <ARTICLE_2 id="services">
          <h3 className="article__title">Nasze usługi</h3>
          <p>
            świadczy kompleksowe usługi w zakresie wykonania dokumentacji
            projektowej dla: dróg i ulic wraz z infrastrukturą towarzyszącą;
            zjazdów indywidualnych jak i publicznych z dróg każdej kategorii;
            parkingów i zatok postojowych; chodników i ścieżek rowerowych.
            Ponadto posiadamy bogate doświadczenie w przygotowaniu projektów
            stałej i tymczasowej organizacji ruchu wraz ze wszystkimi
            niezbędnymi uzgodnieniami. Zapewniamy też nadzory inwestorskie.
          </p>
        </ARTICLE_2>
      </SectionContent>
    </Section>
  )
}

export default sectionAbout
