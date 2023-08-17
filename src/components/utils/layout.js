import React from "react"

import { createGlobalStyle } from "styled-components"

//imports utilisés pour l'image de fond
// import { graphql, useStaticQuery } from 'gatsby'
// import { getImage } from "gatsby-plugin-image"



const GlobalStyle = createGlobalStyle`
body{
   
    margin : 0px;
   display:flex;
   background-color: #dbcbd8;
background-image: linear-gradient(316deg, #dbcbd8 0%, #2e4057 74%);
   
    
}`


const Layout = (props) => {
  
  // const {bgImage} = useStaticQuery(
  //   graphql`
  //     query {
  //       bgImage : file(relativePath: {eq: "Background1.png"}) {
  //         childImageSharp {
  //           gatsbyImageData(quality: 90)
  //         }
  //       }
  //     }
  //   `
  // )

  // const imageData = getImage(bgImage);

  const {layout} = props;
  return (
    <React.Fragment >
      <GlobalStyle ref={props.ref} />
      <div style={layout}>{props.children}</div>
     
    </React.Fragment>

  )
 
}

export default Layout