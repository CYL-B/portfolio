import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from "../hooks/clickOutside";
import "@fontsource/zilla-slab";
import { BookOpen, Laptop, MailSend, ArrowToRight} from '@styled-icons/boxicons-regular';


const StyledBurger = styled.button`
  position: fixed;

  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

// position: absolute;
//   top: 0;
//   left: 0;
const StyledMenu = styled.nav`
position:fixed;
  display: flex;
  z-index:1;
  font-family: Zilla Slab;
  flex-direction: column;
  justify-content: center;
  background: #F4ECE4;
  height: 100vh;
  width: 50vw;
  text-align: center;
  padding: 2rem;
  transition: transform 0.2s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  
  
  @media (max-width: 576px) {
    width: 100%;
    align-items:start;
   
  }

  button {
    border:none;
    font-family: Zilla Slab;
    background:transparent;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #F6CD8B;
    }
  }
`;


const SlideMenu = (props) => {
  const {handleClick1} = props;
  const {handleClick2} = props;
  const {handleClick3} = props;
  const {handleClick4} = props;

  

  const [open, setOpen] = useState(false)
  const node = useRef();


  
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div ref={node}>
      <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu  open={open} setOpen={setOpen}>
        
          <button setOpen={setOpen} onClick={()=> {setOpen(!open);handleClick1()}}><span role="img" aria-label="about us"></span>
          <ArrowToRight style={{height:"2rem", padding:"0px 10px 0px 10px"}}/>About me</button>
        
      
          <button onClick={()=> {setOpen(!open);handleClick2()}}><span role="img" aria-label="price"></span>
          <BookOpen style={{height:"2rem", padding:"0px 10px 0px 10px"}}></BookOpen>Portfolio</button>
        
     
          <button onClick={()=> {setOpen(!open); handleClick3()}}><span role="img" aria-label="contact"></span>
          <Laptop style={{height:"2rem", padding:"0px 10px 0px 10px"}}/>Technologies</button>
        
          <button onClick={()=> {setOpen(!open); handleClick4()}}><span role="img" aria-label="contact"></span>
          <MailSend style={{height:"2rem", padding:"0px 10px 0px 10px"}}/>Contact</button>
        
      </StyledMenu>
    </div>
  )
}
export default SlideMenu

