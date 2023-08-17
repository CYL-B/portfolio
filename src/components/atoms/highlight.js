import * as React from "react"
import styled from "styled-components"

const HighLightContainer = styled.span`
display:inline-block;
position:relative;
&::before{
  content:"";
display: block;
height: 90%;
width: 100%;
margin-left: -3px;
margin-right: -3px;
position: absolute;
background:  ${(props) => (props.color ? "gray" : "#813867")};
transform: rotate(2deg);
top: -1px;
left: -1px;
border-radius: 20% 25% 20% 24%;
padding: 10px 3px 3px 10px;}

`

const HighLight = styled.span`
position:relative;`

const HighLightWrapper = (props) => {

    return(<HighLightContainer color={props.color}><HighLight>{props.children}</HighLight></HighLightContainer>)
}

export default HighLightWrapper;