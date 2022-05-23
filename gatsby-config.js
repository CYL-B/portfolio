const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Camille's portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#F4ECE4`,
        showSpinner: true,
      },
    },
    

  ]
};