import React, { useState } from "react"
import styled from "styled-components"
import { FaArrowRight, FaBars } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"
import LogoAndName from "./../../assets/svg/logo-i-napis.svg"
import { yellowColor } from "./../../assets/colors"

const StyledMobileNavigation = styled.nav`
  transform: ${props =>
    props.navigationShowed ? "translateX(0px)" : "translateX(100%)"};
  position: fixed;
  transition: 0.5s;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: rgba(12, 12, 12, 1);
  color: white;
  font-size: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
  ul {
    margin: 50px 10px;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
    li {
      width: 90%;
      list-style: none;
      font-size: 1.5rem;
      border-bottom: 1px solid #333;
    }
  }
  .menu-arrow {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: transparent;
    outline: none;
    border: none;
    color: ${yellowColor};
    font-size: 2rem;
    transition: 0.5s;
    z-index: 1000;
  }
`

const ButtonWrapper = styled.div`
  position: fixed;
  z-index: 800;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100vw;
  padding: 10px;
  font-weight: bold;
  padding: 0;
  color: white;
  justify-content: space-between;
  background-color: #121212;
  transform: ${props =>
    props.pageTopPosition ? "translateY(-52px)" : "translateY(0)"};
  border-bottom: solid 1px #fdc205;
  transition: 0.5s;
  .logo {
    margin: 3px 0 0 3px;
    font-weight: 300;

    cursor: pointer;
  }
  .menu-bars {
    width: 50px;
    height: 50px;
    padding: 8px;
    transform: ${props =>
      props.pageTopPosition ? "translateY(52px)" : "translateY(0)"};
    margin: 0;
    background-color: transparent;
    outline: none;
    border: none;
    color: ${props => (props.pageTopPosition ? "black" : "white")};
    font-size: 2rem;
    transition: 0.5s;
    z-index: 1000;
    @media (min-width: 768px) {
      display: none;
    }
  }
`

const navigationList = [
  { name: "Start", scrollId: "#start" },
  { name: "O nas", scrollId: "#about" },
  { name: "Nasze usługi", scrollId: "#services" },
  { name: "Referencje", scrollId: "#references" },
  { name: "Kontakt", scrollId: "#contact" },
]

const MobileNavigation = props => {
  const [navigationShowed, setNavigationShowed] = useState(false)
  return (
    <>
      <ButtonWrapper
        navigationShowed={navigationShowed}
        pageTopPosition={props.pageTopPosition}
      >
        <div onClick={() => scrollTo("#start")} className="logo">
          <LogoAndName className="logo" />
        </div>
        <button
          aria-label="show-menu"
          className="menu-bars"
          onClick={() => setNavigationShowed(!navigationShowed)}
        >
          {navigationShowed ? null : <FaBars />}
        </button>
      </ButtonWrapper>
      <StyledMobileNavigation
        navigationShowed={navigationShowed}
        pageTopPosition={props.pageTopPosition}
      >
        <button
          aria-label="close-menu"
          className="menu-arrow"
          onClick={() => setNavigationShowed(!navigationShowed)}
        >
          {navigationShowed ? <FaArrowRight /> : null}
        </button>
        <ul>
          {navigationList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => (
                  scrollTo(item.scrollId),
                  setNavigationShowed(!navigationShowed)
                )}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </StyledMobileNavigation>
    </>
  )
}

export default MobileNavigation
