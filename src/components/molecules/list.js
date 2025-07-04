import * as React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import { SiCss3, SiJavascript, SiHtml5, SiTailwindcss, SiGit, SiVscodium, SiNodedotjs, SiReact, SiRedux, SiSass, SiMongodb, SiExpo, SiHeroku, SiMiro,  SiGatsby, SiPostman, SiNpm, SiFigma} from "react-icons/si";
import { IconContext } from "react-icons";

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

const tableau = [
  [
    { icon: SiNpm, name: "SiNpm" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiMiro, name: "Miro" },
    { icon: SiVscodium, name: "Visualstudio" },
    { icon: SiGit, name: "Git & Github" },
    { icon: SiPostman, name: "Postman" },
  ],
  [
    { icon: SiNodedotjs, name: "Express/Nodejs" },
    { icon: SiMongodb, name: "Mongodb" },
    { icon: SiHeroku, name: "Heroku" },
    { icon: SiExpo, name: "Expo" },
  ],
  [
    { icon: SiJavascript, name: "Javascript" },
    { icon: SiCss3, name: "CSS" },
    { icon: SiSass, name: "SASS" },
    { icon: SiHtml5, name: "HTML" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiReact, name: "React/ReactNative" },
    { icon: SiRedux, name: "Redux" },
    { icon: SiGatsby, name: "Gatsby" },
  ],
];

var design = tableau[0].map((element, i) => {
  const Icon = element.icon;
  return (
    <List key={i}>
     <Icon/>
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var backend = tableau[1].map((element, i) => {
  const Icon = element.icon;
  return (
    <List key={i}>
      <Icon/>
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var frontend = tableau[2].map((element, i) => {
  const Icon = element.icon;
  return (
    <List key={i}>
      <Icon/>
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
