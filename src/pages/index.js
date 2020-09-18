import React, { lazy, Suspense } from "react"
import { GlobalStyle } from "../assets/style/globalStyle"
import PageLoader from "../components/pageLoader"

const SectionsWrapper = lazy(() =>
  import("../components/sections/SectionsWrapper")
)
const Navigation = lazy(() => import("../components/navigation/navigation"))

export const query = graphql`
  {
    image1: file(name: { eq: "hero-image" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    image2: file(name: { eq: "background" }) {
      childImageSharp {
        fluid(quality: 20) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IndexPage = props => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {" "}
      {!isSSR && (
        <Suspense fallback={<PageLoader />}>
          <GlobalStyle />
          <Navigation />
          <SectionsWrapper data={props.data} />
        </Suspense>
      )}
    </>
  )
}

export default IndexPage
