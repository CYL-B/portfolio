const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Camille Fullstack Developer`,
    description: `Hi ! I'm Camille, I'm a web developer and this is where I showcase what I can do.`,
    siteUrl: `https://www.camillebenhammadiportfolio.com/`,
    image: `https://imagizer.imageshack.com/img924/7010/r63NBo.jpg`
  },
  plugins: ["gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-transformer-sharp",
    `gatsby-plugin-minify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
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
        nodeType: 'MongodbPortfolioProfile',
        imagePath: 'https://imagizer.imageshack.com/img924/7010/r63NBo.jpg',
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
         icon: `src/images/icon.png`,
         cache_busting_mode: `none`
      }
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `Portfolio`, 
      auth: {
        user: 'Camdev',
        password: 'E16Rrx0HRym5TVCY'
    }, 
    collection: [`Projects`, `Profile`],
    server: {
        address: 'cluster0-shard-00-01.d5pln.mongodb.net',
        port: 27017
    },
    extraParams:{
      replicaSet: 'cluster0-shard-01',
            ssl: true,
            authSource: 'admin',
            retryWrites: true
    } },
    }
  ]
};