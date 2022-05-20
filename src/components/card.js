import styled from 'styled-components';
import React from 'react';
import "@fontsource/zilla-slab";
import { Github, Youtube } from '@styled-icons/boxicons-logos';
import { StyledIconBase } from '@styled-icons/styled-icon'

const Container = styled.div`
height:500px;
width:750px;
background:transparent;
border-radius: 10px;
margin : 0px auto 20px auto;`
// background:#FFFEF2;
// border-radius: 10px;
// box-shadow:30px -30px 0px rgba(246, 205, 139, 0.7), -30px 30px 0px rgba(246, 205, 139, 0.7);

const Header = styled.h1`
font-family: Zilla Slab;
margin : 30px 30px 0px 30px;
font-size : 35px;
color: #F6CD8B;
text-align:center;
text-shadow:   1px  1px 2px rgba(18, 4, 10, 0.5),
1px -1px 2px rgba(18, 4, 10, 0.5),
-1px  1px 2px rgba(18, 4, 10, 0.5),
-1px -1px 2px rgba(18, 4, 10, 0.5);
`


const Content = styled.p`
font-size: 16px;
text-align:justify;
text-shadow:   1px  1px 2px rgba(18, 4, 10);
font-family: Zilla Slab;
margin : ${(props)=>props.margin?"0px":"20px 50px 0px 50px"} ;
color: #F6CD8B;`

const Divider = styled.hr`
border: 1px solid ;
margin: 25px 25px;
color : #F6CD8B;
opacity:0.3;`

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    cursor: pointer;
   color:#2e4057;
    background-color:transparent;
    border-radius:50px;
    pointer:cursor;
   
  }`

  const CardImage = styled.img`
  background-color: transparent;
  width:100%;
  height:100%;
  object-fit: ${(props)=> props.fit?"contain":"cover"};
  filter: grayscale(1);
  border-radius: 50%;
  &:hover{
    filter : none;
}
  `

  const CardImageWrapper = styled.div`
  width:225px;
  height:225px;
  border-radius: 50%;
  box-shadow: -4px -4px 0px 1px rgba(246, 205, 139), 4px 4px 0px 1px rgba(246, 205, 139), 4px -4px 0px 1px rgba(246, 205, 139), -4px 4px 0px 1px rgba(246, 205, 139);
  filter: grayscale(1);
  &:hover{
      filter : none;
  }
  `

  const ImageWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  height: 50%;
  `


export const CardContainer = (props) => {

    return (
        <Container>
            {props.children}
        </Container>
    )
}



export const CardHeader = (props) => {

    return (
        <Header title={props.title}></Header>
    )
}

export const CardContent = (props) => {
    return (

        <Content margin={props.margin}>{props.children}</Content>
    )
}

// export const ProjectImage = (props) => {

//     return (
//         <div style={{
//             gridColumn: "1/3", gridRow: "1/2", minHeight: 0
//         }}><StaticImage alt="Project logo" src={props.source} placeholder="blurred" backgroundColor="transparent" objectFit="contain" width={225} height={225} imgStyle={{ objectFit: "contain" }} style={{ filter: "grayscale(1)", boxShadow: "-4px -4px 0px 1px rgba(246, 205, 139), 4px 4px 0px 1px rgba(246, 205, 139), 4px -4px 0px 1px rgba(246, 205, 139), -4px 4px 0px 1px rgba(246, 205, 139)", borderRadius: "50%" }}
//         ></StaticImage></div>
//     )
// }

export const CardDivider = (props) => {
    return (
        <Divider></Divider>
    )
}

export const Card = (props) => {
    
    return (
        <Container>


            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "100%", width: "100%" }}><div style={{ gridColumn: "2/-1", alignSelf: "end", gridRow: "1/2", display: "flex", flexDirection: "column", justifyContent: "space-around", backgroundColor: "#813867", height: "80%", width: "auto", boxShadow: "30px -30px 0px rgba(246, 205, 139)" }}><Header>{props.title}</Header>
                <Content>{props.children}</Content>
                <div><Divider></Divider>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center", margin :"0px 10px 0px 10px" }}>
                        

                        <div><Content margin={props.margin}>{props.techno}</Content> </div>
{props.youtube? <a aria-label={props.arial} href={props.href} rel="noreferrer" target="_blank" ><IconStyleWrapper><Youtube aria-hidden="true" size="40"></Youtube></IconStyleWrapper></a> : null}
                       
                        <a aria-label={props.arial2} href={props.href2}  rel="noreferrer" target="_blank"> <IconStyleWrapper><Github aria-hidden="true" size="40"></Github></IconStyleWrapper></a></div>
                </div>
            </div>
                <ImageWrapper><CardImageWrapper><CardImage fit={props.fit} alt={props.alt} src={props.source}></CardImage></CardImageWrapper></ImageWrapper></div>

        </Container>
    )
}


