import styled from "styled-components"
import * as React from "react"
import "@fontsource/zilla-slab";
import "@fontsource/yeseva-one";
import "@fontsource/playfair-display"; 
import "@fontsource/biorhyme";
import "@fontsource/over-the-rainbow";

export const TitleWrapper = (props) => {


    let size 
    let align

    if (props.size == "xl"){
    size = "120px"
    } else if (props.size == "l"){
        size ="60px"
    } else if (props.size =="m"){
        size="28px"
    } else if (props.size=="s"){
        size="24px"
    } else {
        size="14px"
    }

    if (props.align =="droite"){
        align = "right"
    } else if(props.align =="centre") {
        align = "center"}
        else if(props.align =="justify"){
            align = "justify"
    } else {
        align="none"
    }
    
    let font 

    if(props.font =="zilla"){
        font = "Zilla Slab"
    } else {
        font = "Over the Rainbow"
    }

let italic 
if (props.italic =="true"){
    italic = "italic"
}

let margin

if (props.margin == "desc"){
    margin = "30px 30px 0px 0px"
} else if(props.margin == "title"){
    margin="0px 0px 0px 50px"
}

let line
if (props.line == "true"){
    line = "2.5"
} else if (props.line =="title"){
line ="1.0"
}

    const Title = styled.p`
    color: #F6CD8B;
    
    font-family: ${font};
    font-size: ${size};
    text-align: ${align};
    font-style : ${italic};
    margin:0;
    letter-spacing : 0.2rem;
    margin:${margin};
    line-height:${line}
    `
    



    return(

       <Title italic={props.italic} font={props.font} size={props.size} align={props.align}>{props.title}{props.children}</Title>
    )
}

export const Subtitle = (props) =>{
    const SubTitle = styled.p`
    color: white;
    font-family: Zilla Slab;
    font-size: 45px;
    margin:0px 0px 40px 0px;
    font-weight: bold;
    letter-spacing : 1.5rem;`

    

return(
    <SubTitle>{props.children}</SubTitle>

)
};