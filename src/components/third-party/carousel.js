import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        adaptiveHeight: true,
        dots: true,
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    
      };
      return (
          <Slider {...settings}>
            {this.props.children}
          </Slider>
      );
    }
  }