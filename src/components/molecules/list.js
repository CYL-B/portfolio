import * as React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import { SiCss3, SiJavascript, SiHtml5, SiTailwindcss, SiGit, SiVscodium, SiNodedotjs, SiAdobephotoshop, SiReact, SiRedux, SiBootstrap, SiSass, SiMongodb, SiExpo, SiHeroku, SiMiro,  SiGatsby, SiPostman, SiNpm, SiFigma} from "react-icons/si";
import { IconContext } from "react-icons";

import { StyledIconBase } from "@styled-icons/styled-icon";
import { TextWrapper } from "../atoms/text";

const UnorderedList = styled.ul`
  list-style: none;
  overflow-y: auto;
  width: auto;
  display: inline;
  background-color: transparent;
  align-self: start;
`;
const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
`;
;

var tableau = [
  [
    { type: <SiNpm ></SiNpm>, name: "SiNpm" },
    { type: <SiFigma></SiFigma>, name: "Figma" },
    { type: <SiMiro></SiMiro>, name: "Miro" },
    { type: <SiVscodium></SiVscodium>, name: "Visualstudio" },
    { type: <SiGit></SiGit>, name: "Git & Github" },
    { type: <SiPostman></SiPostman>, name: "Postman" },
   
  ],
  [
    { type: <SiNodedotjs className="icon"></SiNodedotjs>, name: "Express/Nodejs" },
    { type: <SiMongodb></SiMongodb>, name: "Mongodb" },
    { type: <SiHeroku></SiHeroku>, name: "Heroku" },
    { type: <SiExpo></SiExpo>, name: "Expo" },
  ],
  [
    { type: <SiJavascript></SiJavascript>, name: "Javascript" },
    { type: <SiCss3></SiCss3>, name: "CSS" },
    { type: <SiSass></SiSass>, name: "SASS" },
    { type: <SiHtml5></SiHtml5>, name: "HTML" },
    { type: <SiTailwindcss></SiTailwindcss>, name: "Tailwind" },
    { type: <SiReact></SiReact>, name: "React/ReactNative" },
    { type: <SiRedux></SiRedux>, name: "Redux" },
    { type: <SiGatsby></SiGatsby>, name: "Gatsby" },
  ],
];

var design = tableau[0].map((element, i) => {
  return (
    <List key={i}>
      {element.type}
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var backend = tableau[1].map((element, i) => {
  return (
    <List key={i}>
      {element.type}
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var frontend = tableau[2].map((element, i) => {
  return (
    <List key={i}>
      {element.type}
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

export const Design = (props) => {
  return (
    <IconContext.Provider value={{  className: "technoIcon" }}>
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {design}
    </UnorderedList>
    </IconContext.Provider>
  );
};

export const Backend = (props) => {
  return (
    <IconContext.Provider value={{  className: "technoIcon" }}>
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {backend}
    </UnorderedList>
    </IconContext.Provider>
  );
};

export const Frontend = (props) => {
  return (
    <IconContext.Provider value={{  className: "technoIcon" }}>
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {frontend}
    </UnorderedList>
    </IconContext.Provider>
  );
};
