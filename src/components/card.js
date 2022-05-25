import styled from 'styled-components';
import React from 'react';
import "@fontsource/zilla-slab";
import { Github, Youtube } from '@styled-icons/boxicons-logos';
import { StyledIconBase } from '@styled-icons/styled-icon';
import {LinkAlt} from "@styled-icons/boxicons-regular"
import { devices } from './responsive';


const Container = styled.div`
background:transparent;
border-radius: 10px;

@media${devices.mobileS}{
    height:215px;
    width:300px;   
    margin : 10px auto 170px auto;  
};
@media${devices.mobileM}{
    height:215px;
    width:350px;
    margin : 10px auto 170px auto;
};

@media${devices.mobileL}{
    height:315px;
    width:474px; 
    margin : 10px auto 10px auto;
};

@media${devices.tablet}{
    height:500px;
    width:750px;   
    margin : 10px auto 10px auto;
};

@media${devices.laptop}{
    height:500px;
    width:750px; 
    margin : 10px auto 10px auto;
};

@media${devices.laptopL}{
    height:500px;
    width:750px;
    margin : 10px auto 10px auto;
};
@media${devices.desktop}{
height:850px;
width:1275px;
margin : 10px auto 10px auto;
}

`
// background:#FFFEF2;
// border-radius: 10px;
// box-shadow:30px -30px 0px rgba(246, 205, 139, 0.7), -30px 30px 0px rgba(246, 205, 139, 0.7);

const Header = styled.h1`
font-family: Zilla Slab;
margin : 30px 30px 0px 30px;
color: #F6CD8B;

text-align:center;
text-shadow:  0 1px 0px #9CA9AB, 1px 0 0px #9CA9AB, 1px 2px 1px #9CA9AB, 2px 1px 1px #9CA9AB, 2px 3px 2px #9CA9AB, 3px 2px 2px #9CA9AB, 3px 4px 2px #9CA9AB, 4px 3px 3px #9CA9AB, 4px 5px 3px #9CA9AB, 5px 4px 2px #9CA9AB, 5px 6px 2px #9CA9AB;

@media${devices.mobileS}{
    font-size : 25px        
};
@media${devices.mobileM}{
    font-size : 25px     
};

@media${devices.mobileL}{
    font-size : 25px    
};

@media${devices.tablet}{
    font-size : 35px;   
};

@media${devices.laptop}{
    font-size : 35px;  
};

@media${devices.laptopL}{
    font-size : 35px;
};
@media${devices.desktop}{
    font-size : 59px;
}
`


const Content = styled.p`
max-height:70%;
overflow-y:auto;
@media${devices.mobileS}{
    display:${(props)=>props.display?"none":"block"} ;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B;   
};
@media${devices.mobileM}{
    display:${(props)=>props.display?"none":"block"} ;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B;  
};

@media${devices.mobileL}{
    display:${(props)=>props.display?"none":"block"} ;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B; 
};

@media${devices.tablet}{
    display:block;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B;   
};

@media${devices.laptop}{
    display:block;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B;   
};

@media${devices.laptopL}{
    display:block;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B;
};
@media${devices.desktop}{
    display:block;
    font-size: 16px;
    text-align:justify;
    text-shadow:   1px  1px 2px rgba(18, 4, 10);
    font-family: Zilla Slab;
    margin : ${(props) => props.margin ? "0px" : "20px 50px 0px 50px"} ;
    color: #F6CD8B; 
     
}`

const Divider = styled.hr`

@media${devices.mobileS}{
    display:none 
};
@media${devices.mobileM}{
    display:none  
};

@media${devices.mobileL}{
 display:none
};

@media${devices.tablet}{
    display: block;
    border: 1px solid ;
margin: 25px 25px;
color : #F6CD8B;
opacity:0.3; 
};

@media${devices.laptop}{
    display: block;
    border: 1px solid ;
margin: 25px 25px;
color : #F6CD8B;
opacity:0.3;
};

@media${devices.laptopL}{
    display: block;
    border: 1px solid ;
    margin: 25px 25px;
    color : #F6CD8B;
    opacity:0.3;
};
@media${devices.desktop}{
    display: block;
    border: 1px solid ;
    margin: 25px 25px;
    color : #F6CD8B;
    opacity:0.3;
     
}`

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    cursor: pointer;
   color:${(props) => props.color ? "red" : "white"};
    background-color:transparent;
    border-radius:50px;
    pointer:cursor;
   
  }`

const CardImage = styled.img`
  background-color: transparent;
  width:100%;
  height:100%;
  object-fit: ${(props) => props.fit ? "contain" : "cover"};
  filter: grayscale(1);
  border-radius: 50%;
  &:hover{
    filter : none;
    cursor:pointer;
}
  `

const CardImageWrapper = styled.div`
  
  border-radius: 50%;
  box-shadow: -4px -4px 0px 1px rgba(246, 205, 139), 4px 4px 0px 1px rgba(246, 205, 139), 4px -4px 0px 1px rgba(246, 205, 139), -4px 4px 0px 1px rgba(246, 205, 139);
  filter: grayscale(1);
  &:hover{
      filter : none;
  };
  @media${devices.mobileS}{
    width:100px;
    height:100px    
};
@media${devices.mobileM}{
    width:120px;
    height:120px
};

@media${devices.mobileL}{
    width:132px;
    height:132px;  
};

@media${devices.tablet}{
    width:225px;
    height:225px;  
};

@media${devices.laptop}{
    width:225px;
    height:225px;  
};

@media${devices.laptopL}{
    width:225px;
  height:225px;
};
@media${devices.desktop}{
    width:225px;
    height:225px; 
}

  `

const ImageWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  height: 50%;
  `

  const YoutubeIcon = styled(Youtube)`
  
  @media${devices.mobileS}{
    height:18px;
    width:18px
};
@media${devices.mobileM}{
    height:20px;
    width:20px 
};

@media${devices.mobileL}{
    height:20px;
    width:20px 
};

@media${devices.tablet}{
    height:40px;
    width:40px;  
};

@media${devices.laptop}{
    height:40px;
    width:40px;    
};

@media${devices.laptopL}{
    height:40px;
    width:40px;  
};
@media${devices.desktop}{
    height:68px;
    width:68px;  
}`

  const GitHubIcon = styled(Github)`
  
  @media${devices.mobileS}{
    height:18px;
    width:18px
};
@media${devices.mobileM}{
    height:20px;
    width:20px 
};

@media${devices.mobileL}{
    height:20px;
    width:20px
};

@media${devices.tablet}{
    height:40px;
    width:40px;  
};

@media${devices.laptop}{
    height:40px;
    width:40px;    
};

@media${devices.laptopL}{
    height:40px;
    width:40px;  
};
@media${devices.desktop}{
    height:68px;
    width:68px;  
}`

  const LinkAltIcon = styled(LinkAlt)`
  
  @media${devices.mobileS}{
    height:18px;
    width:18px
};
@media${devices.mobileM}{
    height:20px;
    width:20px   
};

@media${devices.mobileL}{
    height:20px;
    width:20px
};

@media${devices.tablet}{
    height:40px;
    width:40px;  
};

@media${devices.laptop}{
    height:40px;
    width:40px;    
};

@media${devices.laptopL}{
    height:40px;
    width:40px;  
};
@media${devices.desktop}{
    height:68px;
    width:68px;  
}
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

        <Content display={props.display} margin={props.margin}>{props.children}</Content>
    )
}


export const CardDivider = (props) => {
    return (
        <Divider></Divider>
    )
}
 // boxShadow: "30px -30px 0px rgba(246, 205, 139)",
export const Card = (props) => {

    return (
        <Container data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} data-aos-duration={props.duration}>


            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "100%", width: "100%", margin:"10px 0px 10px 0px" }}><div style={{
                gridColumn: "2/-1", alignSelf: "end", gridRow: "1/2", display: "flex", flexDirection: "column", borderRadius: "20px", justifyContent: "space-around", height: "80%", width: "auto", backgroundColor: "#310e68",
                backgroundImage: "linear-gradient(316deg, #310e68 0%, #5f0f40 74%)"
            }}><Header>{props.title}</Header>
                <Content>{props.children}</Content>
                <div><Divider></Divider>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "0px 10px 0px 10px" }}>


                        <div><Content display margin={props.margin}>{props.techno}</Content> </div>
                        {props.youtube ? <a aria-label={props.arial} href={props.href} rel="noreferrer" target="_blank" ><IconStyleWrapper><YoutubeIcon aria-hidden="true"></YoutubeIcon></IconStyleWrapper></a> : null}
                        {props.link ? <a aria-label={props.arial3} href={props.href3} rel="noreferrer" target="_blank" ><IconStyleWrapper><LinkAltIcon aria-hidden="true"></LinkAltIcon></IconStyleWrapper></a> : null}

                        <a aria-label={props.arial2} href={props.href2} rel="noreferrer" target="_blank"> <IconStyleWrapper><GitHubIcon aria-hidden="true" ></GitHubIcon></IconStyleWrapper></a></div>
                </div>
            </div>
                <ImageWrapper><CardImageWrapper><a aria-label={props.arial4} href={props.href4} rel="noreferrer" target="_blank"><CardImage fit={props.fit} alt={props.alt} src={props.source}></CardImage></a></CardImageWrapper></ImageWrapper></div>

        </Container>
    )
}


