import * as React from "react";
import styled from "styled-components";
import "@fontsource/zilla-slab";
import {
  Figma,
  VisualStudio,
  Nodejs,
  Adobe,
  ReactLogo,
  Javascript,
  Css3,
  Html5,
  Redux,
  Bootstrap,
  Sass,
  Git,
  TailwindCss
} from "@styled-icons/boxicons-logos"; //mongoDB + heroku +npm
import { Plus } from "@styled-icons/boxicons-regular";
import {
  Mongodb,
  Expo,
  Heroku,
  Miro,
  Styledcomponents,
  Gatsby, 
  Postman,
  Npm
} from "@styled-icons/simple-icons";
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

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    display: inline-block;
    margin: 0px 10px 10px 0px;
    color: #2e4057;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50px;
  }
`;

var tableau = [
  [
    { type: <Npm></Npm>, name: "Npm" },
    { type: <Figma></Figma>, name: "Figma" },
    { type: <Miro></Miro>, name: "Miro" },
    { type: <VisualStudio></VisualStudio>, name: "Visualstudio" },
    { type: <Git></Git>, name: "Git & Github" },
    { type: <Postman></Postman>, name: "Postman" },
    { type: <Plus></Plus>, name: "Scrum" },
  ],
  [
    { type: <Nodejs></Nodejs>, name: "Express/Nodejs" },
    { type: <Mongodb></Mongodb>, name: "Mongodb" },
    { type: <Heroku></Heroku>, name: "Heroku" },
    { type: <Expo></Expo>, name: "Expo" },
  ],
  [
    { type: <Javascript></Javascript>, name: "Javascript" },
    { type: <Css3></Css3>, name: "CSS" },
    { type: <Sass></Sass>, name: "SASS" },
    { type: <Html5></Html5>, name: "HTML" },
    { type: <TailwindCss></TailwindCss>, name: "Tailwind" },
    { type: <ReactLogo></ReactLogo>, name: "React/ReactNative" },
    { type: <Redux></Redux>, name: "Redux" },
    { type: <Styledcomponents></Styledcomponents>, name: "Styled-components" },
    { type: <Gatsby></Gatsby>, name: "Gatsby" },
  ],
];

var design = tableau[0].map((element, i) => {
  return (
    <List key={i}>
      <IconStyleWrapper>{element.type}</IconStyleWrapper>
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var backend = tableau[1].map((element, i) => {
  return (
    <List key={i}>
      <IconStyleWrapper>{element.type}</IconStyleWrapper>
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

var frontend = tableau[2].map((element, i) => {
  return (
    <List key={i}>
      <IconStyleWrapper>{element.type}</IconStyleWrapper>
      <TextWrapper font="zilla" title={element.name}></TextWrapper>
    </List>
  );
});

export const Design = (props) => {
  return (
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {design}
    </UnorderedList>
  );
};

export const Backend = (props) => {
  return (
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {backend}
    </UnorderedList>
  );
};

export const Frontend = (props) => {
  return (
    <UnorderedList
      data-aos={props.data}
      data-aos-delay={props.delay}
      data-aos-easing={props.easing}
      data-aos-duration={props.duration}
    >
      {frontend}
    </UnorderedList>
  );
};
