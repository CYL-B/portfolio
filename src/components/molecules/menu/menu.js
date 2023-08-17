import React,{useState} from "react";
import styled from "styled-components";
import { css, keyframes } from 'styled-components';

const MenuLabel = styled.label`
  color : white;
  position: absolute;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  box-shadow: 0 1rem 3rem rgba(246, 205, 139, 0.5);
  text-align: center;
  
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  
`;

const menuAnimation = keyframes`
0% {
  transform: scaleY(0)
}
80% {
  transform: scaleY(1.1)
}
100% {
  transform: scaleY(1)
}`

const growAnimation = 
css`
animation : ${menuAnimation} 300ms ease-in-out forwards;
`

const DropDownContent = styled.div`
background-color: transparent;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
animation:  ${(props) => props.clicked ? css`${growAnimation}`:"none"};
  transform-origin: ${(props) => props.clicked ? "top center":"none"};
  visibility: ${(props) => props.clicked ? "visible":"hidden" };
`



const SubA = styled.span`
color: white;
padding: 12px 16px;


text-decoration: none;
display: ${(props) => props.clicked ? "block":"none" };
text-align: center;
&:hover {
  background-color: #F6CD8B;
  color: #050801;
  box-shadow: 0 0 5px #F6CD8B,
              0 0 25px #F6CD8B,
              0 0 50px #F6CD8B,
              0 0 200px #F6CD8B;
  ;
}
`;

const Menu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);

    };

   
    return (
        <>
            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
            <Icon clicked={click}>&nbsp;
            
            <DropDownContent clicked={click}>
            <SubA clicked={click} >Link 1</SubA>
            <SubA clicked={click}>Link 2</SubA>
            <SubA clicked={click} >Link 3</SubA>
          </DropDownContent></Icon>
        
          
          
         
          
          
     
        </MenuLabel>
        </>
      );
}

export default Menu ; 