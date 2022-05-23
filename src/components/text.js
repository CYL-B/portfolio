import styled from "styled-components"
import * as React from "react"
import "@fontsource/zilla-slab";
import "@fontsource/over-the-rainbow";



const Title = styled.p`
color: #F6CD8B;

font-family: ${props =>(props.font =="Over"? "Over the Rainbow":"Zilla Slab")};
font-size: ${props=>(props.size)};
text-align: ${props =>(props.align =="Centre"? "center":null)};
font-style : ${props =>(props.italic ? "italic":null)};
padding:${(props)=> props.padding};
letter-spacing : 0.2rem;
margin:${props=>(props.margin)};
line-height:${props=>(props.line ?"2.5":"1.0")}
`

const SubTitle = styled.p`
    color: white;
    font-family: Zilla Slab;
    font-size: 45px;
    margin:0px 0px 40px 0px;
    font-weight: bold;
    letter-spacing : 1.5rem;`

    


export const TitleWrapper = (props) => {


    return(

       <Title line={props.line} margin={props.margin} data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} italic={props.italic} font={props.font} padding={props.padding} size={props.size} data-aos-duration={props.duration} align={props.align} data-aos-offset={props.offset} data-aos-anchor-placement={props.placement}>{props.title}{props.children}</Title>
    )
}

export const Subtitle = (props) =>{
    

return(
    <SubTitle  data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} data-aos-duration={props.duration}>{props.children}</SubTitle>

)
};