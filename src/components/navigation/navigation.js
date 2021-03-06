import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MobileNavigation from "./mobileNavigation"
import HorizontalNavigation from "./horizontalNavigation"

const Navigation = () => {
  const [pageTopPosition, setPageTopPosition] = useState("false")

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.scrollY + 200 > window.innerHeight) {
          setPageTopPosition(false)
        } else {
          setPageTopPosition(true)
        }
      })
    }
  }, [])

  const TopBar = styled.div`
    background-color: red;
    height: 50px;
    width: 100%;
    position: absolute;
    z-index: 100;
    color: white;
    transition: 1s;
    transform: ${props =>
      props.pageTopPosition ? "translate(0, -50px)" : "translate(0, 0)"};
  `

  return (
    <>
      <TopBar pageTopPosition={pageTopPosition}>Tech-Drog</TopBar>
      <MobileNavigation pageTopPosition={pageTopPosition} />
      <HorizontalNavigation pageTopPosition={pageTopPosition} />
    </>
  )
}

export default Navigation
