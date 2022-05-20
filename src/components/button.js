import React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";


const CustomButton = styled.button`
width: ${(props) => props.taille="normal"?"190px":"417px"};
height : ${(props) => props.taille ="normal"?"100px":"100px"};
border: 10px solid #F6CD8B;
border-radius: 20px;
cursor: pointer;
background : transparent;
font-family: "Zilla Slab";
color: #FFFEF2;
text-align:center;
font-size : ${(props) => props.taille ="normal" ?"32px":"15px"};
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

export const Button = (props) => {
const{onClick} = props;


var onClik
if(props.onClick){
    var onClik = () =>{
        onClick()
        }}


    return(
        <Layer><CustomButton type={props.type} disabled={props.disabled } size={props.taille} onClick={onClik}>{props.children}</CustomButton></Layer>
    )
}