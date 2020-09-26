import React, { lazy, Suspense } from "react"
import { GlobalStyle } from "../assets/style/globalStyle"
import PageLoader from "../components/pageLoader"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

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
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
        meta={[
          {
            name: "Biuro projektowe techdrog",
            content: "coś tam",
          },
        ]}
      >
        <html lang="pl" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Biuro, Projektowe, biuro projektowe, drogowe, projekty, zjazdy, Żyrardów, organizacja ruchu, mazowieckie, budowlane, Tech, Drog, Tech-Drog, Tech Drog, Arkadiusz Pydzik, Pydzik"
        />
        <title>Tech-Drog</title>
        <meta
          name="description"
          content="Biuro Projektowe Tech-Drog Arkadiusz Pydzik. Projekty budowlane oraz projekty organizacji ruchu na terenie województw mazowieckiego oraz łódzkiego."
        />
        <link rel="icon" href={"./../assets/images/logo-32x32.jpg"} />
      </Helmet>
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
