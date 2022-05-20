import { StaticImage } from "gatsby-plugin-image"
import React from 'react';




export function Avatar() {
    return  <StaticImage alt="Avatar" src="../images/avatar.jpeg" layout="fixed" placeholder="blurred" width={450} height={450}
    style={{borderRadius:"50%", boxShadow:"0px 4px 4px 0px #F6CD8B, -4px 4px 4px 0px #F6CD8B"
}}/>
  
}
 