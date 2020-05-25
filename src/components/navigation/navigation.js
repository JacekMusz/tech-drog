import React, { useState } from "react"
import styled from "styled-components"
import MobileNavigation from "./mobileNavigation"
import HorizontalNavigation from "./horizontalNavigation"

const Navigation = () => {
  const [welcomePageActive, setWelcomPageActive] = useState(true)
  const listener = window.addEventListener("scroll", function (e) {
    if (window.scrollY > window.innerHeight) {
      setWelcomPageActive(false)
    } else {
      setWelcomPageActive(true)
    }
  })

  return (
    <>
      <MobileNavigation welcomePageActive={welcomePageActive} />
      <HorizontalNavigation welcomePageActive={welcomePageActive} />
    </>
  )
}

export default Navigation
