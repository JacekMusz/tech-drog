import React, { useState } from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  top: 0;
  position: fixed;
  .logo {
    position: absolute;
    top: 0;
    font-size: 1.2rem;
  }
  .titles {
    position: absolute;
    top: 12%;
    left: 5%;
    z-index: 50;
    font-weight: bold;
    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 10;
      width: 10px;
      height: 100%;
      border-right: 1px solid black;
      background-color: yellow;
      transform: translate(-15px, 0);
    }
    &__main {
      font-size: 1.2rem;
    }
    &__subtitle {
      font-size: 1rem;
    }
  }
  .motto {
    position: absolute;
    right: 5%;
    top: 30%;
    z-index: 50;
    font-size: 0.8rem;
    color: black;
    &__text {
      font-style: italic;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: yellow;
      margin-left: 40%;
      width: 60%;
      height: 3px;
      bottom: 10px;
      border-bottom: solid 1px black;
    }
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
  height: 100vh;
`

const SectionStart = props => {
  const [welcomePageActive, setWelcomPageActive] = useState(true)
  const listener = window.addEventListener("scroll", function (e) {
    if (window.scrollY > window.innerHeight) {
      setWelcomPageActive(false)
    } else {
      setWelcomPageActive(true)
    }
  })
  return (
    <Section>
      {welcomePageActive ? (
        <>
          <div className="logo">LOGO Tech-Drog</div>
          <div className="titles">
            {" "}
            <h1 className="titles__main">Biuro projektowe Tech-Drog</h1>
            <h3 className="titles__subtitle">Arkadiusz Pydzik</h3>
          </div>
          <div className="motto">
            <p className="motto__text">
              "Zaprojektujemy drogę do wspólnego celu"
            </p>
          </div>
        </>
      ) : null}
      <StyledImage fluid={props.fluid} />
    </Section>
  )
}

export default SectionStart
