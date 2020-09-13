import React from "react"
import styled from "styled-components"
import Logo from "./../assets/logo-300x100.svg"
import LogoName from "./../assets/napis-300x100.svg"

const PageLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`

const PageLoader = () => {
  return (
    <PageLoaderContainer>
      <Logo />

      <p>Trwa ładowanie ...</p>
    </PageLoaderContainer>
  )
}

export default PageLoader
