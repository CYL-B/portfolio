import React, { useRef } from "react";
//custom components
import Layout from "../components/layout";
import { TitleWrapper, Subtitle } from "../components/text";
import SlideMenu from "../components/menu2";
import { Button } from "../components/button";


import ContactForm from "../components/contact";
import { Avatar } from "../components/avatar";
import { Card, CardDivider } from "../components/card";

import { Carousel } from "../components/carousel/slider";
import { Techno } from "../components/list";

import HighLightWrapper from "../components/highlight";

import Footer from "../components/footer";

import { Linkedin, Github } from '@styled-icons/boxicons-logos';
import Kiosk from '../images/welcome.png';
import Droits from "../images/Droits communs.png";

//animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//Librairies pour le style
import styled from "styled-components";

const LinkedinIcon = styled(Linkedin)`
width : 45px;
height : 45px;
color:white;
margin: 20px`

const GithubIcon = styled(Github)`
width : 45px;
height : 45px;
color:white;
margin: 20px`


const DivContact = styled.div`
display:flex;
flex-direction:column`


const DivAbout = styled.div`
display: flex;
width:100vw;
  justify-content : space-around;
  align-items:center;


`

const IndexPage = () => {

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  })


  const ref1 = useRef();

  const handleClick1 = () => {
    ref1.current.scrollIntoView({ behavior: "smooth" });

  };

  const ref2 = useRef();
  const handleClick2 = () => {
    ref2.current.scrollIntoView();
  };

  const ref3 = useRef();
  const handleClick3 = () => {
    ref3.current.scrollIntoView();
  };

  const ref4 = useRef();
  const handleClick4 = () => {
    ref4.current.scrollIntoView();
  };


  return (
    <React.Fragment>

      <Layout id="layout1" layout={{
        width: "100vw", height: "100vh", margin: "0px 0px 5% 0px"
      }}>

        <SlideMenu handleClick1={() => handleClick1()}
          handleClick2={() => handleClick2()}
          handleClick3={() => handleClick3()}
          handleClick4={() => handleClick4()}></SlideMenu>


        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", height:"90%"}}>
          <TitleWrapper  data="zoom-out-down" delay="50" title="Camille" size="xl" line="title" duration="500" margin="title"></TitleWrapper>
          <TitleWrapper margin="title" data="zoom-out-down" delay="500" title="Benhammadi" size="xl" duration="500"></TitleWrapper>
          <Subtitle data="fade-zoom-in" easing="ease-in-back" delay="1000" duration="1000"><HighLightWrapper>Developer</HighLightWrapper></Subtitle>
          <Button taille="normal" onClick={() => handleClick1()}>More</Button>
        </div>
        <a href="https://www.linkedin.com/in/camille-benhammadi-19726311b/?locale=en_US" rel="noreferrer" target="_blank"><LinkedinIcon /></a><a href="https://github.com/CYL-B/droits-communs" rel="noreferrer" target="_blank"><GithubIcon></GithubIcon></a>

      </Layout>

      <Layout id="layout2" layout={{ width: "100vw", height: "100vh" , margin: "10px 0px 10px 0px"}}>
        <div ref={ref1}></div>
        <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="50" margin="title" title="About me" size="l"></TitleWrapper>
        <DivAbout>

          <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" style={{ width: "50%", display: "flex", justifyContent: "center" }}><Avatar ></Avatar></div>
          <div style={{ width: "50%", display: "flex", flexDirection: "column", alignContent: "center" }}><TitleWrapper font="zilla" size="s">From <HighLightWrapper>law</HighLightWrapper> to <HighLightWrapper>tech</HighLightWrapper></TitleWrapper>
            <TitleWrapper data="fade-left" duration="1500" delay="500" line="true" margin="desc" align="justify" font="zilla" size="xs">Hello !
       I’m Camille, I'm a french jurist turned <HighLightWrapper>full stack developer</HighLightWrapper> with a keen interest for design, UX/UI and accessibility. In 2021, I joined a french bootcamp called <a style={{  textDecoration: "none"}}rel="noreferrer" target="_blank" href="https://www.lacapsule.academy/">"La Capsule"</a> to learn how to code with <HighLightWrapper>Javascript</HighLightWrapper> and worked as a teacher’s assistant for 2 months. 
I would love to be part of a team where I can put my skills to good use and learn new ones. I'm based in <HighLightWrapper>Montréal</HighLightWrapper> ,Canada.</TitleWrapper></div></DivAbout>


      </Layout>
      <Layout  id="layout3" layout={{margin: "10px 0px 10px 0px", width: "100vw", height: "100vh" }}>
        <div ref={ref2}></div>
      <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="300" margin="title" size="l">Portfolio</TitleWrapper>
        <div style={{display:"flex", alignItems:"center", width:"100%", height:"100%"}}>
        
    <TitleWrapper margin="port" data="fade-right"
   
    easing="ease-in-out-quad" delay="600"  font="zilla" size="m" >Here are the projects that I have worked on/have been working on as a fullstack developer.</TitleWrapper>
    <div style={{padding:"10px", minWidth:"55vw", maxHeight:"70vh", overflowY:"auto", borderLeft:"5px solid rgba(246, 205, 139, 0.7)", alignSelf:"start"}}>
       <Card data="fade-right" delay="500" duration="1000" youtube href="https://youtu.be/Fx4hOgKBU04" href2="https://github.com/CYL-B/Kiosk-front" source={Kiosk} title="KIOSK" techno="#ReactNative #ReactnativeElements #MongoDB#NodeJs" margin>KIOSK is a marketplace for professionals looking for ethical and eco-friendly services and products for their business.<br></br>
          This is my coding bootcamp final project. I worked with a team of 3 people to turn it into a mobile application in 2 weeks. KIOSK was built with React Native.</Card>

          <Card link href3="https://calm-dawn-80536.herokuapp.com/" title="Droit(s) Communs" source={Droits} href2="https://github.com/CYL-B/droits-communs.git" techno="#React #MUI #MongoDB #Nodejs #mailchimp #Leaflet" margin>Droit(s) commun(s) is a personal project that I designed and am currently developing which aims to promote legal design. My goal was to create a media to make law accessible to people with no academic background in that field. 

I'm still working on it but you can check it out ! 
 </Card>
 </div>
 </div>
      </Layout>

      <Layout id="layout4" layout={{ width: "100vw", height: "100vh", margin: "10px 0px 10px 0px" }}>
        <div ref={ref3}></div>
        <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="300" margin="title" title="Technologies" size="l"></TitleWrapper>
        <div style={{ display: "flex", justifyContent: "space-evenly", maxHeight: "70%", width: "100%" }}>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-duration="700"
     data-aos-offset="0" style={{ maxHeight: "100%", overflowY: "auto" }}><TitleWrapper font="zilla" size="s" align="centre">Front-end</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="front"></Techno></div>

          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="900"
     data-aos-duration="700"
     data-aos-offset="0"><TitleWrapper font="zilla" size="s" align="centre">Back-end</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="back"></Techno></div>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1300"
     data-aos-duration="700"
     data-aos-offset="0"><TitleWrapper font="zilla" size="s" align="centre">Design & more</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="design"></Techno></div></div>
      </Layout>

      <div>
        <Layout id="layout5" layout={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "space-around", margin: "10px 0px 10px 0px" }}>
          <DivContact ref={ref4}>
            <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="300" margin="title" title="Contact" size="l"></TitleWrapper>
            <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="600"  font="zilla" size="xs"><HighLightWrapper>Let's work together !</HighLightWrapper></TitleWrapper>
            <CardDivider></CardDivider>
            <TitleWrapper data="fade-right"
    
    easing="ease-in-out-quad" delay="900" font="zilla" size="xs">Email : benhammadcamille@hotmail.fr</TitleWrapper>
          </DivContact>
          <ContactForm data="fade-down-left" duration="2000" easing="ease-in-out-cubic"></ContactForm>

        </Layout>
        <Footer></Footer>
      </div>

    </React.Fragment>

  )
}

export default IndexPage
