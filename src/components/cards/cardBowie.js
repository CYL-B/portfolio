import styled from 'styled-components';
import { keyframes } from 'styled-components';
import React from 'react';
import "@fontsource/zilla-slab";
import { devices } from '../utils/responsive';
import { SocialLink } from './socials';



const CardContainer = styled.article`
align-items: center;
background-color: rgba(43, 46, 87, 0.2);
border-radius: 12px;
box-shadow: 5px -5px 10px 0px rgba(0, 0, 0, 0.21), -5px 5px 10px 0px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
display: flex;
height: 280px;
margin-top:10px;
margin-bottom:10px;
margin-left: auto;  
margin-right: auto;  
padding: 20px;
position: relative;
width: 335px;   

@media${devices.tablet}{
    height: 280px;
    width: 400px;
};

@media${devices.laptop}{
    height: 400px;
    width: 562px; 
};
`

const CardContentWrapper = styled.div`
background-color: rgba(49, 46, 87, 0.55);
border: 1px solid rgba(255, 255, 255, 0.29);
border-radius: 12px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-around;
padding: 10px 30px;
position: relative; 
height: 100%;
width: 100%;
`;


const CardBottomContent = styled.div`
display: flex;
justify-content: space-around;
width: 100%; 
`
const CardImageWrapper = styled.figure`
height: 50px;
margin:0;
position: absolute;
top: 10px;
right: 20px;
width: 50px;
z-index:2;

media${devices.tablet}{
    height: 75px;
    width: 75px;
}

@media${devices.laptop}{
    height: 100px;
    width: 100px; 
}
`;

const CardImageContent = styled.img`
border-radius: 50%;
filter: grayscale(100%);
object-fit: cover;
transition: transform 2s ease-in-out;
width: 100%;
height:100%;

&:hover {
    filter: grayscale(0%);
    transform: zoom;
}

}`

const CardTextContent = styled.p`
background-color: rgba(255, 210, 215,0.3);
border-radius: 10px;
color: rgba(255, 255, 255, 1);
font-family: Zilla Slab;
font-size: 12px;
font-weight: 400;
margin:0;
max-height: 20%;
padding: 15px 20px;
overflow: auto;

@media${devices.tablet}{
    font-size: 16px; 
}
`;

const Title = styled.h2`
color: rgba(255, 255, 255, 1);
font-family: Zilla Slab;
font-size: 22px;
font-weight: 700;
margin:0;
text-transform: capitalize;

@media${devices.tablet}{
    font-size: 30px; 
}
@media${devices.laptop}{
    font-size: 40px; 
}
`;

const movementMobile = keyframes`
    25% {
   transform: translateX(calc(335px - 15px));
    }
    
    50% {
      transform: translateX(calc(335px - 15px)) translateY(calc(280px - 15px));
    }
    
    75% {
   transform: translateX(0) translateY(calc(280px - 15px));
    }
   
      100% {
   transform: translateX(0) translateY(0);
    };`

const movementTablet = keyframes`
    25% {
   transform: translateX(calc(400px - 15px));
    }
    
    50% {
      transform: translateX(calc(400px - 15px)) translateY(calc(280px - 15px));
    }
    
    75% {
   transform: translateX(0) translateY(calc(280px - 15px));
    }
   
      100% {
   transform: translateX(0) translateY(0);
    }
;` 

const movementDesktop = keyframes`
    25% {
   transform: translateX(calc(562px - 15px));
    }
    
    50% {
      transform: translateX(calc(562px - 15px)) translateY(calc(400px - 15px));
    }
    
    75% {
   transform: translateX(0) translateY(calc(400px - 15px));
    }
   
      100% {
   transform: translateX(0) translateY(0);
    }
;
`

const RotatingDot = styled.span`
animation: ${movementMobile} 20s linear infinite alternate;
background: #F6CD8B;
border-radius:50%;
height:15px;
left: 0;
position:absolute;
top: 0;
width: 15px;

&:hover {
    animation-play-state: paused; 
}

@media${devices.tablet}{
animation: ${movementTablet} 20s linear infinite alternate; 
};

@media${devices.laptop}{
    animation: ${movementDesktop} 20s linear infinite alternate; 
}`;

const Divider = styled.hr`
border: 1px solid rgba(255, 255, 255, 0.3);
margin-left: auto;
margin-right: auto;
width: 90%;

&:first-of-type {
    transform: translateY(12px);
}

@media${devices.laptop}{
    &:first-of-type {
        transform: translateY(25px);
    }
    };`;

export const CardBowie = (props) => {

    const socialInformation = props.socialInformation;
    console.log(socialInformation, "social");

     const socialArray = socialInformation.map ((socialLink) =>
     socialLink.alt && socialLink.url && socialLink.name &&
     <SocialLink socialAlt={socialLink.alt}
      socialIcon={socialLink.url}
        socialTitle={socialLink.name}></SocialLink>
     )

     console.log(socialArray, "social2");

    return (
       
        <CardContainer>
            <RotatingDot/>

            <CardContentWrapper>
                <CardImageWrapper>
                <a target='blank' href={props.imageLink} >
                    <CardImageContent src={props.imageContent} alt={props.imageAlt} />
                    </a>
                </CardImageWrapper>
                
                <Divider />
                <Title>{props.title}</Title>
                <CardTextContent>
                    {props.textContent}
                </CardTextContent>
                <Divider />
                <CardBottomContent>
                {socialArray}
                </CardBottomContent>
            </CardContentWrapper>
        </CardContainer>
      
    )
}