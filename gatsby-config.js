const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Camille Fullstack Developer`,
    description: `Hi ! I'm Camille, I'm a web developer and this is where I showcase what I can do.`,
    siteUrl: `https://www.camillebenhammadiportfolio.com/`,
    image: `https://imagizer.imageshack.com/img924/7010/r63NBo.jpg`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-transformer-sharp",
    `gatsby-plugin-minify`,
    {
  resolve: "gatsby-plugin-styled-components",
  options: {
    displayName: true,
    fileName: false,
    pure: true,
    ssr: true,
  },
},
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "MongodbPortfolioProfile",
        imagePath: "https://imagizer.imageshack.com/img924/7010/r63NBo.jpg",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camille Fullstack Developer`,
        short_name: `Camille Dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F4ECE4`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `Portfolio`,
        auth: {
          user: "Camdev",
          password: "E16Rrx0HRym5TVCY",
        },
        collection: [`Projects`, `Profile`],
        server: {
          address: "cluster0-shard-00-01.d5pln.mongodb.net",
          port: 27017,
        },
        extraParams: {
          replicaSet: "cluster0-shard-01",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
};
