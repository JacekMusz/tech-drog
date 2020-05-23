import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledHorizontalNavigation = styled.nav`
  display: none;
  @media (min-width: 720px) {
    display: block;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    width: 60%;
    color: black;
  }
  ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    li {
      list-style: none;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`

const HorizontalNavigation = () => {
  return (
    <StyledHorizontalNavigation>
      <ul>
        <li onClick={() => scrollTo("#start")}>Start</li>
        <li onClick={() => scrollTo("#about")}>O nas</li>
        <li onClick={() => scrollTo("#services")}>Nasze usługi</li>
        <li onClick={() => scrollTo("#references")}>Referencje</li>
        <li onClick={() => scrollTo("#contact")}>Kontakt</li>
      </ul>
    </StyledHorizontalNavigation>
  )
}

export default HorizontalNavigation
