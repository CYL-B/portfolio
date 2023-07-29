import React, { useRef, useEffect } from "react";
//custom components
import Layout from "../components/layout";
import { TitleWrapper, Subtitle, TextWrapper } from "../components/text";
import SlideMenu from "../components/menu2";
import { Button } from "../components/button";


import ContactForm from "../components/contact";
import { Avatar } from "../components/avatar";
import { Card } from "../components/card";

import { Design, Frontend, Backend } from "../components/list";

import HighLightWrapper from "../components/highlight";

import Footer from "../components/footer";

import { Linkedin, Github } from '@styled-icons/boxicons-logos';
import Kiosk from '../images/welcome.png';
import Droits from "../images/Droits communs.png";

//animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import Arrow from '../components/animated/down.gif'

//Librairies pour le style
import styled from "styled-components";

//responsive
import { devices } from "../components/responsive";

//SEO
import { SEO } from "../components/seo";


const Divider = styled.hr`
border: ${props => (props.border ? "0px" : "1px solid")} ;
margin: ${props => (props.margin ? "20px 20px" : "25px 25px")};
color : ${props => (props.color ? "transparent" : "#F6CD8B")};
opacity:0.3;
@media${devices.mobileS}{
  display:block;
     
};
@media${devices.mobileM}{
  
  display:block;
};

@media${devices.mobileL}{
  
  display:block;
};

@media${devices.tablet}{
  display:block; 
  
};

@media${devices.laptop}{
  
  display:${props => (props.display ? "none" : "block")}  
};

@media${devices.laptopL}{
  
 display:${props => (props.display ? "none" : "block")}  
};
@media${devices.desktop}{
  display:${props => (props.display ? "none" : "block")}  
}`

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

const DivLayout = styled.div`
display: flex; 

@media(max-width: 320px){
  
  flex-direction: column;
  flex-grow:1;
  align-items:center;
};
@media(max-width: 375px){
  flex-direction: column;
  flex-grow:1;
  align-items:center;
};

@media(max-width: 425px){

  flex-direction: column;
  flex-grow:1;
  align-items:center;
};

@media(max-width:768px){
  flex-direction: column;
  flex-grow:1;
  align-items:center;
};

@media(max-width:1024px){
  justify-content: space-around;
  align-items:center
}

@media(max-width:1440px){
  justify-content: space-around;
  align-items:center
}

@media(max-width:2560px){
  justify-content: space-around;
  align-items:center
}`

const DivContact = styled.div`
display:flex;
flex-direction:column;
text-align:center
`


const DivAbout = styled.div`
display: flex;
width:100vw;
  
  @media(max-width: 320px){
    flex-direction:column;
    
  };
  @media(max-width: 375px){
    flex-direction:column;
  };
  
  @media(max-width: 425px){
    flex-direction:column;
  };
  
  @media(max-width:768px){
 flex-direction:column;
  };
  
  @media(max-width:1024px){
    flex-direction:column;
    
  }
  
  @media(max-width:1440px){
    justify-content : space-around;
    align-items:center;
  }
  
  @media(max-width:2560px){
    justify-content : space-around;
    align-items:center;
  }


`

const DivAbout2 = styled.div`
display: flex;
flex-direction: column;
align-content: center;

@media(max-width: 320px){
  width:100%;
     
    
};
@media(max-width: 375px){
  width:100%;
 
};

@media(max-width: 425px){
  width:100%;

};

@media(max-width:768px){
  width:100%;
 
};

@media(max-width:1024px){
 width:100%;

}

@media(max-width:1440px){
  width: 50%
}

@media(max-width:2560px){
  width: 50%
}

`
const DivTechno = styled.div`
width: 100%; 
display: flex;

@media(max-width: 320px){
  
  flex-direction: column;
  flex-grow:1;
  align-items:center;
};
@media(max-width: 375px){
  flex-direction: column;
  flex-grow:1;
  align-items:center;
};

@media(max-width: 425px){

  flex-wrap: wrap;
  justify-content:center;
};

@media(max-width:768px){
  flex-wrap: wrap;
  justify-content:center;
};

@media(max-width:1024px){
  justify-content:space-evenly;
}

@media(max-width:1440px){
  justify-content:space-evenly;
}

@media(max-width:2560px){
  justify-content:space-evenly;
}
`
const DivPortfolio = styled.div`
display: flex;

 @media(max-width: 320px){
  flex-direction:column 

};
@media(max-width: 375px){
  flex-direction:column 
};

@media(max-width: 425px){
  flex-direction:column
};

@media(max-width:768px){
  flex-direction:column
};

@media(max-width:1024px){
  flex-direction:column;
}

@media(max-width:1440px){
align-items: center;
 width: 100%;
 height: 100%;
}

@media(max-width:2560px){
align-items: center;
 width: 100%;
 height: 100%;
} `

const DivPortfolio2 = styled.div`
padding: 10px;
 min-width: 55vw; 
 max-height: 70vh; 
 overflow-y: auto;

 @media${devices.mobileS}{

  align-self: center     
};
@media${devices.mobileM}{
  
  align-self: center
};

@media${devices.mobileL}{
  
  align-self: center 
};

@media${devices.tablet}{
 
  align-self: center
};

@media${devices.laptop}{
  
  align-self: center
};

@media${devices.laptopL}{
  
  align-self: start;   
};
@media${devices.desktop}{
  align-self: start;  
}
`
const IndexPage = () => {

  useEffect(() => {
    document.title = 'Camille Web Developer';

    const animate = () => {
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
    }
    animate()
  }, [])



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


        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90%" }}>
          <TitleWrapper margin data="zoom-out-down" delay="50" title="Camille" size duration="500" font="Over" ></TitleWrapper>
          <TitleWrapper margin font="Over" data="zoom-out-down" delay="500" title="Benhammadi" size duration="500"></TitleWrapper>
          <Subtitle data="fade-zoom-in" easing="ease-in-back" delay="1000" duration="1000"><HighLightWrapper>Developer</HighLightWrapper></Subtitle>
          <Button onClick={() => handleClick1()} ariaLabel="Go to about me" >More</Button>
        </div>

        <a aria-label="linkedin" href="https://www.linkedin.com/in/camille-benhammadi-19726311b/?locale=en_US" rel="noreferrer" target="_blank"><LinkedinIcon /></a><a aria-label="git" href="https://github.com/CYL-B/droits-communs" rel="noreferrer" target="_blank"><GithubIcon></GithubIcon></a>

      </Layout>

      <Layout id="layout2" layout={{ margin: "0px 0px 5% 0px" }}>
        <div ref={ref1}></div>
        <TitleWrapper data="fade-right"

          font="Over" easing="ease-in-out-quad" delay="50" title="About me"></TitleWrapper>
        <DivAbout>

          <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false" style={{ width: "50%", display: "flex", justifyContent: "center" }}><Avatar ></Avatar></div>
          <DivAbout2><TextWrapper font="zilla" size>From <HighLightWrapper>law</HighLightWrapper> to <HighLightWrapper>tech</HighLightWrapper></TextWrapper>
            <TextWrapper data="fade-left" duration="1500" delay="500" line margin align="justify" font="zilla" >Hello !
              I’m Camille, I'm a french jurist turned <HighLightWrapper>full stack developer</HighLightWrapper> with a keen interest for design, UX/UI and accessibility. <Divider border margin display color />In 2021, I joined a french bootcamp called <a style={{ textDecoration: "underline dotted", fontWeight: "bold", color: "inherit" }} rel="noreferrer" target="_blank" href="https://www.lacapsule.academy/">"La Capsule"</a> to learn how to code with <HighLightWrapper>Javascript</HighLightWrapper> and worked as a teacher’s assistant for 2 months.<Divider border margin display color />
              I would love to be part of a team where I can put my <button style={{
                all: "unset", fontWeight: "bold", textDecoration: "underline dotted",
                cursor: " pointer"
              }} onClick={() => handleClick3()} aria-label="Go to skills section">skills</button> to good use and learn new ones. I'm based in <HighLightWrapper>Montréal</HighLightWrapper> , Canada.</TextWrapper></DivAbout2></DivAbout>


      </Layout>
      <Layout id="layout3" layout={{ margin: "0px 0px 5% 0px" }}>
        <div ref={ref2}></div>
        <TitleWrapper font="Over" data="fade-right"

          easing="ease-in-out-quad" delay="300" >Portfolio</TitleWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "0px 20px 0px 0px" }}><img src={Arrow} alt="Down Arrow" /></div>
        <DivPortfolio>

          <div style={{ padding: "0px 0px 0px 50px" }}><TextWrapper margin data="fade-right"

            easing="ease-in-out-quad" delay="600" font="zilla" size >Here are some projects that I have worked on or have been working on as a fullstack developer.</TextWrapper></div>

          <DivPortfolio2>

            <Card href4="https://youtu.be/Fx4hOgKBU04"
              data="fade-right"
              delay="500"
              duration="1000"
              youtube 
              arial4="External link to youtube video presenting Kiosk"
              arial="External link to youtube video presenting Kiosk"
              arial2="Link to Kiosk github repository"
              href="https://youtu.be/Fx4hOgKBU04"
              href2="https://github.com/CYL-B/Kiosk-front"
              source={Kiosk}
              title="KIOSK"
              techno="#ReactNative #ReactnativeElements #MongoDB#NodeJs" margin
              alt="Kiosk welcome page">KIOSK is a marketplace for professionals looking for ethical and eco-friendly services and products for their business.<br></br>
              This is my coding bootcamp final project. I worked with a team of 3 people to turn it into a mobile application in 2 weeks. KIOSK was built with React Native.</Card>

            <Card
              href4="https://calm-dawn-80536.herokuapp.com/"
              link 
              arial2="Link to Droits Communs github repository"
              arial3="External link to Droits Communs app"
              arial4="External link to Droits Communs app"
              href3="https://calm-dawn-80536.herokuapp.com/"
              title="Droit(s) Communs"
              source={Droits}
              href2="https://github.com/CYL-B/droits-communs.git"
              techno="#React #MUI #MongoDB #Nodejs #mailchimp #Leaflet" margin
              alt="Droits Commun(s) welcome page">Droit(s) commun(s) is a personal project that I designed and am currently developing which aims to promote legal design. My goal was to create a media to make law accessible to people with no academic background in that field.

              I'm still working on it but you can check it out !
            </Card>
          </DivPortfolio2>
        </DivPortfolio>
      </Layout>

      <Layout id="layout4" layout={{ margin: "0px 0px 5% 0px" }}>
        <div ref={ref3}></div>
        <TitleWrapper font="Over" data="fade-right"

          easing="ease-in-out-quad" delay="300" title="Technologies"></TitleWrapper>
        <DivTechno>
          <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-duration="700"
            data-aos-offset="0" style={{ maxHeight: "70%", overflowY: "auto" }}><TextWrapper font="zilla" size align="Centre">Front-end</TextWrapper>
            <Divider></Divider>
            <Frontend></Frontend></div>

          <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-duration="700"
            data-aos-offset="0"><TextWrapper font="zilla" size align="Centre">Back-end</TextWrapper>
            <Divider></Divider>
            <Backend></Backend></div>
          <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1300"
            data-aos-duration="700"
            data-aos-offset="0"><TextWrapper font="zilla" size align="Centre">Design & more</TextWrapper>
            <Divider></Divider>
            <Design></Design></div></DivTechno>
      </Layout>


      <Layout id="layout5" layout={{ margin: "10px 0px 10px 0px" }}>
        <TitleWrapper font="Over" data="fade-right"

          easing="ease-in-out-quad" delay="300" title="Contact"></TitleWrapper>
        <DivLayout>
          <DivContact ref={ref4}>

            <TextWrapper data="fade-right"

              easing="ease-in-out-quad" delay="600" font="zilla" size><HighLightWrapper>Let's work together !</HighLightWrapper> </TextWrapper>
            <hr style={{ visibility: "hidden" }}></hr>

            <TextWrapper data="fade-right"

              easing="ease-in-out-quad" delay="7c00" font="zilla">I am open to any job opportunity that would match my profile and set of skills.</TextWrapper>
            <Divider></Divider>
            <TextWrapper data="fade-right"

              easing="ease-in-out-quad" delay="900" font="zilla" >Email : benhammadcamille@hotmail.fr</TextWrapper>
          </DivContact>
          <ContactForm data="fade-down-left" duration="2000" easing="ease-in-out-cubic"></ContactForm>
        </DivLayout>
      </Layout>
      <Footer></Footer>


    </React.Fragment>

  )
}

export default IndexPage

export const Head = () => (
  <>
   <html lang="en" />
  <SEO />
  </>
)