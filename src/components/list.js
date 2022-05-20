import * as React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import { Figma, VisualStudio, Nodejs, Adobe, ReactLogo, Javascript, Css3, Html5, Redux, Bootstrap, Git} from '@styled-icons/boxicons-logos'//mongoDB + heroku +npm
import {Plus} from "@styled-icons/boxicons-regular";
import {Mongodb, Expo, Heroku, Miro, Styledcomponents, Gatsby, Jest } from'@styled-icons/simple-icons'
import {StyledIconBase} from '@styled-icons/styled-icon'
import {TitleWrapper} from './text'

const UnorderedList = styled.ul`
list-style:none;
height:100%;
width:auto;
display:inline;
background-color: transparent;
align-self:start;

`
const List = styled.li`
display:flex;
align-items: center;
justify-content: start;
`

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    cursor: pointer;
    display:inline-block;
   margin :0px 10px 10px 0px;
   color:#2e4057;
   width:50px;
   height:50px;
    background-color:transparent;
    border-radius:50px;
    
    
  }`

  export const Techno = (props) => {

    const {type} = props;

    var tableau = [[{type: <Figma></Figma>,
  name:"Figma"}, {type:<Miro></Miro>, name:"Miro"}, {type: <Adobe></Adobe>, name:"Photoshop"}, {type : <VisualStudio></VisualStudio>, name:"Visualstudio"}, {type:<Git></Git>, name:"Git & Github"},{type:<Plus></Plus>, name:"Agile & SCRUM"} ],  [{type: <Nodejs></Nodejs>, name:"Express/Nodejs"}, {type:<Mongodb></Mongodb>, name:"Mongodb"},{type:<Heroku></Heroku>, name:"Heroku"}, {type:<Expo></Expo>, name:"Expo"}], [{type : <Javascript></Javascript>, name:"Javascript"}, {type: <Css3></Css3>, name:"CSS"}, {type : <Html5></Html5>, name:"HTML"}, {type: <ReactLogo></ReactLogo>, name:"React/ReactNative"}, {type: <Redux></Redux>, name:"Redux"}, {type:<Bootstrap></Bootstrap>, name:"Bootstrap"}, {type:<Styledcomponents></Styledcomponents>, name:"Styled-components"}, {type:<Gatsby></Gatsby>, name:"Gatsby"}]];

    var tab 

    if(type ==="design"){
      tab = tableau[0].map((element, i)=>{

        return(
          <List i >
                    <IconStyleWrapper>{element.type}</IconStyleWrapper><TitleWrapper font="zilla" title={element.name}></TitleWrapper>
                </List>
        )
      })
    } else if (type ==="back"){
      tab = tableau[1].map((element, i)=>{

        return(
          <List i>
                    <IconStyleWrapper>{element.type}</IconStyleWrapper><TitleWrapper font="zilla" title={element.name}></TitleWrapper>
                </List>
        )
      })
    } else if (type ==="front"){
      tab = tableau[2].map((element, i)=>{

        return(
          <List i>
                    <IconStyleWrapper>{element.type}</IconStyleWrapper><TitleWrapper font="zilla" title={element.name}></TitleWrapper>
                </List>
        )
      })
    }



    return(
        
            <UnorderedList type={type}>
                {tab}
            </UnorderedList>
 
    )
  }