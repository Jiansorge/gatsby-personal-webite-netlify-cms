/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line
require("dotenv").config({
  path: `.env`,
})

// eslint-disable-next-line
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Jian Sorge",
    description: "Jian Sorge's Portfolio using Gatsby+Contentful",
    author: "Jian Sorge",
    twitterUsername: "",
    image: "/index-hero.gif",
    siteUrl: "https://jiansorge.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // eslint-disable-next-line
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // eslint-disable-next-line
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true
      },
    },
  ],
}
