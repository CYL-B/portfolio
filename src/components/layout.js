import React, {useRef} from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { createGlobalStyle } from "styled-components"

// import Background from "../images/background.png"

import { getImage } from "gatsby-plugin-image"

import { BgImage } from 'gbimage-bridge';


const GlobalStyle = createGlobalStyle`
body{
   
    margin : 0px;
   display:flex;
   background-color: #dbcbd8;
background-image: linear-gradient(316deg, #dbcbd8 0%, #2e4057 74%);
   
    
}`


const Layout = (props) => {
  
  const {bgImage} = useStaticQuery(
    graphql`
      query {
        bgImage : file(relativePath: {eq: "Background1.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
      }
    `
  )

  const imageData = getImage(bgImage);

  const {layout} = props;
  return (
    <React.Fragment>
      <GlobalStyle />
      <div style={layout}>{props.children}</div>
     
    </React.Fragment>

  )
 
}

export default Layout