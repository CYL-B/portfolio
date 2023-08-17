const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Camille Fullstack Developer`,
    description: `Hi ! I'm Camille, I'm a web developer and this is where I showcase what I can do.`,
    siteUrl: `https://www.camillebenhammadiportfolio.com/`
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
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `Portfolio`, 
      auth: {
        user: 'Camdev',
        password: 'E16Rrx0HRym5TVCY'
    }, 
    collection: `Projects`, 
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