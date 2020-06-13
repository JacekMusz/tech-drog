import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { FaRoad } from "react-icons/fa"

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
  padding: 5%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 6px -1px black;
  background-color: rgba(0, 0, 0, 0.8);
  .article {
    width: 100%;
  }
  .article-three {
    margin-bottom: 50px;
  }

  @media (min-width: 1199px) {
  }
`

const StyledArticleTitle = styled.h3`
  position: relative;
  font-size: 24px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 70px;
    background-color: yellow;
    bottom: -10px;
    transform: translateX(-10vw);
  }
  @media (min-width: 359px) {
    font-size: 26px;
    &:before {
      width: 100px;
    }
  }
  @media (min-width: 410px) {
    font-size: 26px;
    &:before {
      width: 120px;
    }
  }
  @media (min-width: 767px) {
    font-size: 28px;
    &:before {
      width: 200px;
    }
  }
  @media (min-width: 1199px) {
    font-size: 30px;
    &:before {
      width: 240px;
    }
  }
`

const StyledArticle = styled.div`
  width: 100%;
  .text {
    font-size: 13px;
    line-height: 20px;
    font-weight: normal;

    .last-acapit {
      padding-left: 5px;
      border-left: 5px solid yellow;
    }
    ul {
      padding: 0;
      li {
        list-style: none;
        margin-top: 15px;
        margin-bottom: 2px;
        .icon-road {
          margin-right: 5px;
          color: yellow;
        }
        @media (min-width: 1199px) {
          &::after {
            content: "";
            display: block;
            width: 40px;
            height: 2px;
            background-color: yellow;
            transform: translateX(20px);
          }
          .icon-road {
            display: none;
          }
          &::after {
            transform: translateX(-10px);
          }
        }
      }
    }
  }
  @media (min-width: 359px) {
    .text {
      font-size: 15px;
    }
  }
  @media (min-width: 410px) {
    .text {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media (min-width: 767px) {
    .text {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media (min-width: 1199px) {
    .text {
      font-size: 19px;
      line-height: 30px;
    }
  }
`

const sectionAbout = props => {
  return (
    <Section>
      <StyledBackgroundImage fluid={props.fluid} alt="section-background">
        <SectionContent id="about" className="content">
          <StyledArticle>
            <StyledArticleTitle>O nas</StyledArticleTitle>
            <div className="text">
              Biuro projektowe „Tech-Drog” Arkadiusz Pydzik powstało 2008 roku.
              Świadczymy usługi w zakresie projektowania infrastruktury drogowej
              dla inwestorów prywatnych jak i publicznych. Realizujemy zlecenia
              na terenie województwa mazowieckiego jak i łódzkiego. Firma
              współpracuje z wykwalifikowanymi specjalistami z branży drogowej
              jak i branż infrastruktury towarzyszącej (wodno-kanalizacyjnej,
              energetycznej, teletechnicznej i gazowej).
            </div>
          </StyledArticle>

          <StyledArticle id="services">
            <StyledArticleTitle>Nasze Usługi</StyledArticleTitle>
            <div className="text">
              Świadczy kompleksowe usługi w zakresie wykonania dokumentacji
              projektowej dla:
              <ul>
                <li>
                  <FaRoad className="icon-road" />
                  dróg i ulic wraz z infrastrukturą towarzyszącą,{" "}
                </li>
                <li>
                  <FaRoad className="icon-road" />
                  zjazdów indywidualnych jak i publicznych z dróg każdej
                  kategorii,{" "}
                </li>
                <li>
                  {" "}
                  <FaRoad className="icon-road" />
                  parkingów i zatok postojowych,{" "}
                </li>
                <li>
                  {" "}
                  <FaRoad className="icon-road" /> chodników i ścieżek
                  rowerowych.{" "}
                </li>
              </ul>
            </div>
          </StyledArticle>
          <StyledArticle id="services" className="article-three">
            <StyledArticleTitle>Ponadto ...</StyledArticleTitle>
            <div className="text">
              Posiadamy bogate doświadczenie w przygotowaniu projektów stałej i
              tymczasowej organizacji ruchu wraz ze wszystkimi niezbędnymi
              uzgodnieniami.
              <br />
              <br />
              <div className="last-acapit">
                Zapewniamy również nadzory inwestorskie.
              </div>
            </div>
          </StyledArticle>
        </SectionContent>
      </StyledBackgroundImage>
    </Section>
  )
}

export default sectionAbout
