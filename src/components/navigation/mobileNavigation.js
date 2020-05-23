import React, { useState } from "react"
import styled from "styled-components"
import { FaArrowRight, FaBars } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledMobileNavigation = styled.nav`
  transform: ${props =>
    props.navigationShowed ? "translateX(10px)" : "translateX(100%)"};
  position: fixed;
  transition: 0.5s;
  z-index: 100;
  top: 0;
  right: 0;
  width: 80%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.95);
  color: white;
  font-size: 2rem;
  @media (min-width: 720px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
    li {
      list-style: none;
      font-size: 1.5rem;
      border-bottom: 1px solid white;
    }
  }
  button {
    margin: 0;
    background-color: transparent;
    outline: none;
    border: none;
    color: ${props => (props.navigationShowed ? "yellow" : "black")};
    font-size: 2rem;
    transition: 0.5s;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  padding-left: 10px;
  font-weight: bold;
  padding: 0;
  background-color: ${props =>
    props.navigationShowed ? "black" : "transparent"};
  border-bottom: solid 3px
    ${props => (props.navigationShowed ? "yellow" : "black")};
  transition: 0.5s;
  transform: ${props =>
    props.navigationShowed ? "translateX(0)" : "translateX(-45px)"};
`

const MobileNavigation = () => {
  const [navigationShowed, setNavigationShowed] = useState(false)
  return (
    <StyledMobileNavigation navigationShowed={navigationShowed}>
      <ButtonWrapper navigationShowed={navigationShowed}>
        {" "}
        <button onClick={() => setNavigationShowed(!navigationShowed)}>
          {navigationShowed ? <FaArrowRight /> : <FaBars />}
        </button>
      </ButtonWrapper>

      <ul>
        <li onClick={() => scrollTo("#start")}>Start</li>
        <li onClick={() => scrollTo("#about")}>O nas</li>
        <li onClick={() => scrollTo("#services")}>Nasze usługi</li>
        <li onClick={() => scrollTo("#references")}>Referencje</li>
        <li onClick={() => scrollTo("#contact")}>Kontakt</li>
      </ul>
    </StyledMobileNavigation>
  )
}

export default MobileNavigation
