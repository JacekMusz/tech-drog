import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Section = styled.section`
  width: 100%;
  z-index: 20;
  position: relative;
  margin-top: 100vh;
  color: black;
  height: 100%;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

const SectionContent = styled.div`
  position: relative;
  z-index: 31;
  top: 0;
  color: white;
  padding: 0 10% 0 5%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  .article {
    width: 100%;
    .text {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: normal;
      text-align: justify;
      .last-acapit {
        padding-left: 5px;
        border-left: 5px solid yellow;
      }
    }
    .article__title {
      display: block;
      position: relative;
      font-size: 2.2rem;
      width: 100%;
      &:before {
        content: "";
        display: block;
        position: absolute;
        height: 5px;
        width: 50vw;
        background-color: yellow;
        bottom: -15px;
      }
    }
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
          background-color: yellow;
          transform: translateX(-10px);
        }
      }
    }
  }
  .article-one,
  .article-three {
    margin-bottom: 50px;
    .article__title {
      &:before {
        transform: translateX(-20%);
      }
    }
  }
  .article-two {
    .article__title {
      text-align: right;
      &:before {
        transform: translateX(40vw);
      }
    }
  }
`

const sectionAbout = props => {
  return (
    <Section>
      <StyledBackgroundImage fluid={props.fluid}>
        <SectionContent id="about" className="content">
          <article className="article article-one">
            <h3 className="article__title">O nas</h3>
            <div className="text">
              Biuro projektowe „Tech-Drog” Arkadiusz Pydzik powstało 2008 roku.
              Świadczymy usługi w zakresie projektowania infrastruktury drogowej
              dla inwestorów prywatnych jak i publicznych. Realizujemy zlecenia
              na terenie województwa mazowieckiego jak i łódzkiego. Firma
              współpracuje z wykwalifikowanymi specjalistami z branży drogowej
              jak i branż infrastruktury towarzyszącej:{" "}
              <ul>
                <li> wodno-kanalizacyjnej,</li>
                <li> energetycznej,</li>
                <li> teletechnicznej,</li>
                <li> gazowej.</li>
              </ul>
            </div>
          </article>

          <article id="services" className="article article-two">
            <h3 className=" article__title">Nasze usługi</h3>
            <div className="text">
              Świadczy kompleksowe usługi w zakresie wykonania dokumentacji
              projektowej dla: dróg i ulic wraz z infrastrukturą towarzyszącą;
              zjazdów indywidualnych jak i publicznych z dróg każdej kategorii;
              parkingów i zatok postojowych; chodników i ścieżek rowerowych.
              Ponadto posiadamy bogate doświadczenie w przygotowaniu projektów
              stałej i tymczasowej organizacji ruchu wraz ze wszystkimi
              niezbędnymi uzgodnieniami. Zapewniamy też nadzory inwestorskie.
            </div>
          </article>
          <article id="services" className="article article-three">
            <h3 className="article__title">Ponadto</h3>
            <div className="text">
              Ponadto posiadamy bogate doświadczenie w przygotowaniu projektów
              stałej i tymczasowej organizacji ruchu wraz ze wszystkimi
              niezbędnymi uzgodnieniami.
              <br />
              <br />
              <div className="last-acapit">
                Zapewniamy również nadzory inwestorskie.
              </div>
            </div>
          </article>
        </SectionContent>
      </StyledBackgroundImage>
    </Section>
  )
}

export default sectionAbout
