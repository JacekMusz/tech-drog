import React from "react"
import styled from "styled-components"
import { yellowColor } from "../../assets/colors"

const Section2 = styled.section`
  min-height: 50vh;
  width: 80%;
  padding: 5vh 10%;
  position: relative;
  z-index: 400;
  box-shadow: 0 0 6px -1px black;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0 0 20px 0;
    font-size: 13px;
    @media (min-width: 359px) {
      font-size: 14px;
    }
    @media (min-width: 410px) {
      font-size: 14px;
    }
    @media (min-width: 767px) {
    }
    @media (min-width: 1199px) {
    }
  }
  .references__subtitle {
    font-size: 16px;
    &:after {
      height: 1px;
    }
  }
  .references__list {
    padding: 0;
    li {
      font-size: 13px;
      list-style: none;
      margin-top: 15px;
      margin-bottom: 2px;
      @media (min-width: 359px) {
        font-size: 14px;
      }
      @media (min-width: 410px) {
        font-size: 16px;
      }
      @media (min-width: 767px) {
      }
      @media (min-width: 1199px) {
      }
      &::after {
        content: "";
        display: block;
        width: 40px;
        height: 1px;
        background-color: ${yellowColor};
        transform: translateX(20px);
      }
      &::after {
        transform: translateX(-10px);
      }
    }
  }
`
const OffsetDiv = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50vh;
`
const StyledArticleTitle = styled.h2`
  font-size: 22px;
  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 40%;
    bottom: 0;
    background-color: ${yellowColor};
    transform: translateX(-20%);
  }
  @media (min-width: 359px) {
    font-size: 24px;
  }
  @media (min-width: 410px) {
    font-size: 26px;
  }
  @media (min-width: 767px) {
  }
  @media (min-width: 1199px) {
  }
`

const StyledArticleSubTitle = styled.h3`
  font-size: 15px;
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 40%;
    bottom: 0;
    background-color: ${yellowColor};
    transform: translateX(-20%);
  }
  @media (min-width: 359px) {
    font-size: 16px;
  }
  @media (min-width: 410px) {
    font-size: 18px;
  }
  @media (min-width: 767px) {
  }
  @media (min-width: 1199px) {
  }
`

const SectionReferences = () => {
  return (
    <>
      <OffsetDiv id="references"></OffsetDiv>
      <Section2>
        <StyledArticleTitle>Referencje i realizacje</StyledArticleTitle>
        <p>
          Współpracujemy zarówno z klientami indywidualnymi, firmami oraz
          instytucjami publicznymi
        </p>
        <StyledArticleSubTitle>
          Zaufali nam między innymi:
        </StyledArticleSubTitle>
        <ul className="references__list">
          <li>SKANSKA S.A.</li>
          <li>STRABAG Sp. z o.o.</li>
          <li>PKP Energetyka S.A.</li>
          <li>EUROVIA POLSKA S.A.</li>
          <li>GLOBAL PARKS POLAND Sp. z o.o.</li>
          <li>Mimatech Sp. z o.o.</li>
          <li>DROGOMEX Sp. z o.o.</li>
          <li>EL-KOL Sp. z o.o.</li>
          <li>MILLSEN Sp. z o.o.</li>
          <li>EUROVIA POLSKA S.A.</li>
          <li>„GAZ” Sp. z o.o.</li>
          <li>„INSTALBUD” Sp. z o.o.</li>
          <li>DELTA S.A.</li>
          <li>MABAU Polska Sp. z o.o.</li>
          <li>Miasta i gminy z terenu powiatu żyrardowskiego i grodziskiego</li>
          <li>Mazowiecki Zarząd Dróg Wojewódzkich w Warszawie</li>
        </ul>
      </Section2>
    </>
  )
}

export default SectionReferences
