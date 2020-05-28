import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const StyledHorizontalNavigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    width: 60%;
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
      color: ${props => (props.pageTopPosition ? "black" : "white")};
      &:after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        transform-origin: 50%;
        transform: scale(0.01);
        transition: 0.5s;
        opacity: 0;
        background-color: ${props =>
          props.pageTopPosition ? "black" : "yellow"};
      }
      &:hover {
        color: ${props => (props.pageTopPosition ? "black" : "yellow")};
        &:after {
          width: 100%;
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
  @media (min-width: 1199px) {
    .nav__list-item {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1599px) {
    width: 50%;
    .nav__list-item {
      font-size: 1.4rem;
    }
  }
`

const HorizontalNavigation = props => {
  return (
    <StyledHorizontalNavigation pageTopPosition={props.pageTopPosition}>
      <ul>
        <li className={"nav__list-item"} onClick={() => scrollTo("#start")}>
          Start
        </li>
        <li className={"nav__list-item"} onClick={() => scrollTo("#about")}>
          O nas
        </li>
        <li className={"nav__list-item"} onClick={() => scrollTo("#services")}>
          Nasze usługi
        </li>
        <li
          className={"nav__list-item"}
          onClick={() => scrollTo("#references")}
        >
          Referencje
        </li>
        <li className={"nav__list-item"} onClick={() => scrollTo("#contact")}>
          Kontakt
        </li>
      </ul>
    </StyledHorizontalNavigation>
  )
}

export default HorizontalNavigation
