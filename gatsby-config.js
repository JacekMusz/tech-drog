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
        google: {
          families: [
            "Droid Sans",
            "Droid Serif",
            "Montserrat",
            "Fondamento",
            "Merriweather",
            "Cinzel",
          ],
        },
      },
    },
    { resolve: "gatsby-plugin-zopfli" },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Biuro projektowe Tech-Drog Arkadiusz Pydzik`,
        short_name: `Tech-Drog`,
        description: `Biuro Projektowe Tech-Drog Arkadiusz Pydzik. Projekty budowlane oraz projekty organizacji ruchu na terenie województw mazowieckiego oraz łódzkiego.`,
        lang: `pl`,
        icon: `src/assets/svg/logo-32x32 SVG.svg`,
        start_url: `/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-config",
  ],
}
