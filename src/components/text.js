import styled from "styled-components"
import * as React from "react"
import "@fontsource/zilla-slab";
import "@fontsource/over-the-rainbow";
import { devices } from "./responsive";

const Title = styled.p`
color: #F6CD8B;
font-family: ${props =>(props.font =="Over"? "Over the Rainbow":"Zilla Slab")};
text-align: ${props =>(props.align =="Centre"? "center":null)};
font-style : ${props =>(props.italic ? "italic":null)};
letter-spacing : 0.2rem;

line-height:${props=>(props.line ?"2.5":"1.0")};

@media${devices.mobileS}{
    font-size: ${props=>(props.size?"40px":"20px")};   
    margin:${props=>(props.margin?"20px 0px 20px 0px":"0px 0px 50px 50px")  
}};
@media${devices.mobileM}{
    font-size: ${props=>(props.size?"45px":"22px")};
    margin:${props=>(props.margin?"20px 0px 20px 0px":"0px 0px 50px 50px")
};};

@media${devices.mobileL}{
    font-size: ${props=>(props.size?"50px":"25px")};
    margin:${props=>(props.margin?"25px 0px 25px 0px":"0px 0px 50px 50px")
};

@media${devices.tablet}{
    font-size: ${props=>(props.size?"63px":"32px")}; 
    margin:${props=>(props.margin?"30px 0px 30px 0px":"0px 0px 50px 50px")
}};

@media${devices.laptop}{
    font-size: ${props=>(props.size?"86px":"43px")};  
    margin:${props=>(props.margin?"30px 0px 30px 0px":"0px 0px 50px 50px")};
};

@media${devices.laptopL}{
    font-size: ${props=>(props.size?"120px":"60px")};
    margin:${props=>(props.margin?"50px 0px 50px 0px":"0px 0px 50px 50px")}};

};
@media${devices.desktop}{
    font-size: ${props=>(props.size?"204px":"102px")};
}
`

const Text = styled.p`
color: #F6CD8B;

font-family: ${props =>(props.font =="Over"? "Over the Rainbow":"Zilla Slab")};
text-align: ${props =>(props.align =="Centre"? "center":null)};
font-style : ${props =>(props.italic ? "italic":null)};
padding:${(props)=> props.padding};
letter-spacing : 0.2rem;

line-height:${props=>(props.line ?"2.5":"1.0")};

@media${devices.mobileS}{
    font-size: ${props=>(props.size ?"20px":"14px")};
};
@media${devices.mobileM}{
    font-size: ${props=>(props.size ?"20px":"14px")};
};

@media${devices.mobileL}{
    font-size: ${props=>(props.size ?"20px":"14px")};
};

@media${devices.tablet}{
    font-size: ${props=>(props.size ?"24px":"14px")}; 
};

@media${devices.laptop}{
    font-size: ${props=>(props.size ?"24px":"14px")};   
};

@media${devices.laptopL}{
    font-size: ${props=>(props.size ?"24px":"14px")};
    margin:${props=>(props.margin?"30px 30px 0px 0px":"0px 0px 0px 0px")};
};
@media${devices.desktop}{
    font-size: ${props=>(props.size ?"41px":"24px")};
}
`

const SubTitle = styled.p`
    color: white;
    font-family: Zilla Slab;
    margin:0px 0px 40px 0px;
    font-weight: bold;

    @media${devices.mobileS}{
        font-size:16px;
        letter-spacing : 0.5rem;
        
    };
    @media${devices.mobileM}{
       font-size: 18px;
       letter-spacing : 1rem
    };
    
    @media${devices.mobileL}{
     font-size:21px;
     letter-spacing : 1rem
    };
    
    @media${devices.tablet}{
        font-size: 24px;
        letter-spacing : 1rem
    };
    
    @media${devices.laptop}{
        font-size: 32px;
        letter-spacing : 1.2rem;
    };
    
    @media${devices.laptopL}{
        font-size: 45px;
        letter-spacing : 1.5rem;
    };
    @media${devices.desktop}{
        font-size: 76px;
        letter-spacing : 2.5rem;
    }`

    
export const TextWrapper=(props) =>{
    return(
        <Text line={props.line} margin={props.margin} data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} italic={props.italic} font={props.font} padding={props.padding} size={props.size} data-aos-duration={props.duration} align={props.align} data-aos-offset={props.offset} data-aos-anchor-placement={props.placement}>{props.title}{props.children}</Text>
    )
}

export const TitleWrapper = (props) => {


    return(

       <Title line={props.line} margin={props.margin} data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} italic={props.italic} font={props.font} padding={props.padding} size={props.size} data-aos-duration={props.duration} align={props.align} data-aos-offset={props.offset} data-aos-anchor-placement={props.placement}>{props.title}{props.children}</Title>
    )
}

export const Subtitle = (props) =>{
    

return(
    <SubTitle  data-aos={props.data} data-aos-delay={props.delay} data-aos-easing={props.easing} data-aos-duration={props.duration}>{props.children}</SubTitle>

)
};