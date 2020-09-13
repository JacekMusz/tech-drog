import React, { useState, useEffect } from "react"
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
    border-left: 10px solid yellow;
    padding-left: 10px;
    overflow: hidden;
    &__main {
      font-size: 1.2rem;
      transform: translateX(-100%);
      animation: titleAnimation 1s both 1;
    }
    &__subtitle {
      font-size: 1rem;
      transform: translateX(-100%);
      animation: titleAnimation 1s 0.5s both 1;
    }
  }
  .motto {
    position: absolute;
    right: 5%;
    top: 33%;
    z-index: 50;
    font-size: 0.8rem;
    color: black;
    overflow: hidden;
    padding: 5px 0;
    &__text {
      opacity: 0;
      transform: translateY(100%);
      font-style: italic;
      animation: mottoAnimation 1s 1.8s both 1;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: yellow;
      margin-left: 40%;
      width: 60%;
      height: 3px;
      bottom: 0px;
      opacity: 0;
      transform: translateY(100%);
      animation: mottoAnimation 1s 1s both 1;
    }
  }
  /* Media for Galaxy S5 (360px) and iphone 6/7/8 (375) */
  @media (min-width: 359px) {
    .titles {
      &__main {
        font-size: 1.4rem;
      }
      &__subtitle {
        font-size: 1.2rem;
      }
    }
    .motto {
      font-size: 0.95rem;
    }
  }
  /* Media for Pixel 2 (411px) and iphone 6/7/8 plus (414px) */
  @media (min-width: 410px) {
    .titles {
      &__main {
        font-size: 1.6rem;
      }
      &__subtitle {
        font-size: 1.3rem;
      }
    }
    .motto {
      font-size: 1rem;
      top: 30%;
    }
  }
  /* Media for iPad (768px) */
  @media (min-width: 767px) {
    .titles {
      &__main {
        font-size: 2rem;
      }
      &__subtitle {
        font-size: 1.7rem;
      }
    }
    .motto {
      font-size: 1.2rem;
      top: 33%;
    }
  }
  @media (min-width: 1199px) {
    .titles {
      &__main {
        font-size: 2.5rem;
      }
      &__subtitle {
        font-size: 2rem;
      }
    }
    .motto {
      font-size: 1.2rem;
      top: 33%;
      right: 15%;
    }
  }
  @media (min-width: 1599px) {
    .titles {
      left: 10%;
      &__main {
        font-size: 2.7rem;
      }
      &__subtitle {
        font-size: 2.1rem;
      }
    }
    .motto {
      font-size: 1.3rem;
      top: 33%;
      right: 15%;
    }
  }
  @keyframes titleAnimation {
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes mottoAnimation {
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
  height: 100vh;
`

const SectionStart = ({ fluid }) => {
  const [pageTopPosition, setPageTopPosition] = useState("false")

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.scrollY > window.innerHeight) {
          setPageTopPosition(false)
        } else {
          setPageTopPosition(true)
        }
      })
    }
  })
  return (
    <Section>
      {pageTopPosition ? (
        <>
          <div className="titles">
            {" "}
            <h1 className="titles__main">Biuro projektowe Tech-Drog</h1>
            <h3 className="titles__subtitle">Arkadiusz Pydzik</h3>
          </div>
          <div className="motto">
            <div className="motto__text">
              "Zaprojektujemy drogę do wspólnego celu"
            </div>
          </div>
        </>
      ) : null}
      <StyledImage fluid={fluid} alt="primary-background" />
    </Section>
  )
}

export default SectionStart
