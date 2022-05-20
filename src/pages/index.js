import React, { useRef, useState } from "react"
import Layout from "../components/layout"
import { TitleWrapper, Subtitle } from "../components/text";
import styled from "styled-components";
import SlideMenu from "../components/menu2"
import { Button } from "../components/button"

import { Linkedin } from '@styled-icons/boxicons-logos'

import ContactForm from "../components/contact";
import { Avatar } from "../components/avatar";
import { Card, CardDivider } from "../components/card";

import { Carousel } from "../components/carousel/slider"
import { Techno } from "../components/list";

import HighLightWrapper from "../components/highlight";

import Footer from "../components/footer";

import Kiosk from '../images/welcome.png'
import Droits from "../images/Droits communs.png"

const LinkedinIcon = styled(Linkedin)`
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




const IndexPage = (props) => {



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
        width: "100vw", height: "100vh"
      }}>

        <SlideMenu handleClick1={() => handleClick1()}
          handleClick2={() => handleClick2()}
          handleClick3={() => handleClick3()}
          handleClick4={() => handleClick4()}></SlideMenu>


        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", height:"90%"}}>
          <TitleWrapper title="Camille" size="xl" line="title"></TitleWrapper>
          <TitleWrapper title="Benhammadi" size="xl" ></TitleWrapper>
          <Subtitle><HighLightWrapper>Developer</HighLightWrapper></Subtitle>
          <Button taille="normal" onClick={() => handleClick1()}>More</Button>
        </div>
        <a href="https://www.linkedin.com/in/camille-benhammadi-19726311b/?locale=en_US" rel="noreferrer" target="_blank"><LinkedinIcon /></a>

      </Layout>

      <Layout id="layout2" layout={{ width: "100vw", height: "100vh" }}>
        <div ref={ref1}></div>
        <TitleWrapper margin="title" title="Who ?" size="l"></TitleWrapper>
        <DivAbout>

          <div style={{ width: "50%", display: "flex", justifyContent: "center" }}><Avatar></Avatar></div>
          <div style={{ width: "50%", display: "flex", flexDirection: "column", alignContent: "center" }}><TitleWrapper font="zilla" size="s">From <HighLightWrapper>law</HighLightWrapper> to <HighLightWrapper>tech</HighLightWrapper></TitleWrapper>
            <TitleWrapper line="true" margin="desc" align="justify" font="zilla" size="xs">Hello !
              I’m <HighLightWrapper>Camille</HighLightWrapper> and I used to draft legal documents, now I draft websites.

              I’ve always had an interest in tech. I created my first website with Adobe dreamweaver in highschool. And I also worked on tech-related issues while studying law.

              I decided to learn to code in 2021 so I did a bootcamp  and worked as a teacher’s assistant for 6 months. Now here I am !

              I like to create things and solve problems. I’m passionate about what I do.
              Interest in product design, making accessible and simple websites, learning and trying different projects...</TitleWrapper></div></DivAbout>


      </Layout>
      <Layout id="layout3" layout={{ width: "100vw", height: "100vh" }}>
        <div ref={ref2}></div>
        <TitleWrapper margin="title" title="What ?" size="l"></TitleWrapper>
        <Carousel><Card youtube href="https://youtu.be/Fx4hOgKBU04" href2="https://github.com/CYL-B/Kiosk-front" source={Kiosk} title="KIOSK" techno="#ReactNative #ReactnativeElements #MongoDB#NodeJs" margin>KIOSK is a marketplace for professionals looking for ethical and eco-friendly services and products for their business.<br></br>
          This is my coding bootcamp final project. I worked with a team of 3 people to turn it into a mobile application in 2 weeks. KIOSK was built with React Native.</Card>

          <Card youtube href="https://calm-dawn-80536.herokuapp.com/" title="Droit(s) Communs" source={Droits} href2="https://github.com/CYL-B/droits-communs.git" techno="#React #MUI #MongoDB #Nodejs #mailchimp #Leaflet" margin>Droit(s) commun(s) is a personal project that I designed and am currently coding to promote legal design. My goal was to create a media to make law accessible to people with no academic background in that field. 

I'm still working on it but you can check it out ! 
 </Card></Carousel>
      </Layout>

      <Layout id="layout4" layout={{ width: "100vw", height: "100vh" }}>
        <div ref={ref3}></div>
        <TitleWrapper margin="title" title="How ?" size="l"></TitleWrapper>
        <div style={{ display: "flex", justifyContent: "space-evenly", maxHeight: "70%", width: "100%" }}>
          <div style={{ maxHeight: "100%", overflowY: "auto" }}><TitleWrapper font="zilla" size="s" align="centre">Front-end</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="front"></Techno></div>

          <div><TitleWrapper font="zilla" size="s" align="centre">Back-end</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="back"></Techno></div>
          <div><TitleWrapper font="zilla" size="s" align="centre">Design & more</TitleWrapper>
            <CardDivider></CardDivider>
            <Techno type="design"></Techno></div></div>
      </Layout>

      <div>
        <Layout id="layout5" layout={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "space-around" }}>
          <DivContact ref={ref4}>
            <TitleWrapper margin="title" title="Contact" size="l"></TitleWrapper>
            <TitleWrapper font="zilla" size="xs"><HighLightWrapper>Let's work together !</HighLightWrapper></TitleWrapper>
            <CardDivider></CardDivider>
            <TitleWrapper font="zilla" size="xs">Email : benhammadcamille@hotmail.fr</TitleWrapper>
          </DivContact>
          <ContactForm></ContactForm>

        </Layout>
        <Footer></Footer>
      </div>

    </React.Fragment>

  )
}

export default IndexPage
