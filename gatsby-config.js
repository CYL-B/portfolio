const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Camille Fullstack Developer`,
    description: `Hi ! I'm Camille, I'm a web developer and this is where I showcase what I can do.`,
    siteUrl: `https://camillefullstackdeveloper.gatsbyjs.io`
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
    }
    

  ]
};