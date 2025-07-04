// import styled from 'styled-components';
// import React from 'react';
// import "@fontsource/zilla-slab";
// import { devices } from '../utils/responsive';
// import { Github, Youtube } from '@styled-icons/boxicons-logos';
// import { LinkAlt } from "@styled-icons/boxicons-regular"

// const SocialAnchor = styled.a
// `align-items: center;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// text-decoration:none`


// const SocialImage = styled.div`
// svg {
// border-radius: 9999px;
// fill:  rgba(255,255,255,1);
// height: 20px;
// transition: fill 1s;
// width: 20px;

// &:hover {
//     fill: #F6CD8B;
// }
// }

// @media${devices.tablet}{
//     svg {
//     height: 30px;
//     width: 30px; 
//     }
// }
// `;

// const SocialText = styled.span`
// color: rgba(255,255,255,1);
// font-size: 11px;
// font-family: Zilla Slab;
// font-weight: 400;`;

// const SocialWrapper = styled.div`
// `;

// export const icon = (iconName, alt) => {
//     switch (iconName) {
//     case "GitHub" : return <Github alt={alt} ></Github>
//     case "Youtube": return <Youtube alt={alt} ></Youtube>
//     case "LinkAlt": return <LinkAlt alt={alt}></LinkAlt>
//     }{
    
//     }}

// export const SocialLink = ( props) => {

//     return (
//     <SocialWrapper>
//         <SocialAnchor href={props.socialIcon} target="blank">
//             <SocialImage>
//                     {icon(props.socialTitle, props.socialAlt)}
//                 </SocialImage>
//             <SocialText >
//                 {props.socialTitle}
//             </SocialText>
//             </SocialAnchor>
//     </SocialWrapper>)
// };

