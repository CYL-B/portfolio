import React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";



export const Button = (props) => {
const{onClick} = props;
const{taille} = props;

var width
var height

if (taille == "normal"){
    width = "190px";
    height = "100px"
} else if (taille =="large"){
    width="417px"
    height="100px"
} else if (taille =="small"){
    width="70px"
    height="47px"
}

const CustomButton = styled.button`
width: ${width};
height : ${height};
border: 10px solid #F6CD8B;
border-radius: 20px;
cursor: pointer;
background : transparent;
font-family: "Zilla Slab";
color: #FFFEF2;
text-align:center;
font-size : ${taille =="small" ? "15px": "32px"};
&:hover {
    background-color: #F6CD8B

    ;
  }
&:disabled{
    background:  #fff;
    color: #ccc;
    cursor: no-drop
}
`

const Layer = styled.div`
display:flex;
justify-content : center;
`

    return(
        <Layer><CustomButton disabled={props.disabled } size={taille} onClick={() => onClick()}>{props.children}</CustomButton></Layer>
    )
}