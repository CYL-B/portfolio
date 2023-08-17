import React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import { devices } from "../utils/responsive";


const CustomButton = styled.button`

border-radius: 20px;
cursor: pointer;
background : transparent;
font-family: Zilla Slab;
color: #FFFEF2;
text-align:center;

&:hover {
    background-color: #F6CD8B

    ;
  }
&:disabled{
    background:  #fff;
    color: #ccc;
    cursor: no-drop
};
@media${devices.mobileS}{
    max-height : 50px;
   max-width: 95px;
   font-size:16px;
   border: 5px solid #F6CD8B;
};
@media${devices.mobileM}{
    min-height : 50px;
   min-width: 95px;
   font-size:18px;
   border: 5px solid #F6CD8B;
};

@media${devices.mobileL}{
 min-height : 55px;
   min-width: 104px;
   font-size:20px;
   border: 6px solid #F6CD8B;
};

@media${devices.tablet}{
    min-height : 53px;
   min-width: 100px;
   font-size:22px;
   border: 6px solid #F6CD8B;
};

@media${devices.laptop}{
    min-height : 71px;
    min-width: 135px;
    font-size: 28px;
    border: 9px solid #F6CD8B;
};

@media${devices.laptopL}{
min-width:190px;
min-height :100px;
font-size : 32px;
border: 10px solid #F6CD8B;
};
@media${devices.desktop}{
min-width:323px;
min-height :170px;
font-size : 54px;
border: 17px solid #F6CD8B;
}
`

const Layer = styled.div`
display:flex;
justify-content : center;
`

export const Button = (props) => {

const{onClick, ariaLabel} = props;


var onClik
if(props.onClick){
    onClik = () =>{
        onClick()
        }}


    return(
        <Layer><CustomButton type={props.type} disabled={props.disabled } size={props.taille} onClick={onClik} aria-label={ariaLabel} role="button">{props.children}</CustomButton></Layer>
    )
}