require("dotenv").config({
  path: `.env`,
})
const config = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["DIN Pro"],
          urls: ["/tech-drog/src/static/fonts/fonts.css"],
        },
        google: {
          families: ["Droid Sans", "DIN Pro", "Droid Serif", "Montserrat"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-recaptcha`,
    "gatsby-plugin-config",
  ],
}
