import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//Librairies pour le style
import styled from "styled-components";

const CustomSlider = styled(Slider)`
.slick-dots {
  li {
    &.slick-active {
      button {
        &:before {
          color: #fff;
          font-size: 15px;
        }
      }
    }

    button {
      &:before {
        color: #fff;
        font-size: 10px;
      }
    }
  }
}

.slick-prev {
  left: 5px;
}

.slick-next {
  right: 5px;
}

`

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        adaptiveHeight: true,
        arrows : true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               arrows:true,
                slidesToShow: 1,

              }
            },
            {
              breakpoint: 768,
              settings: {
               arrows: false,
                slidesToShow: 1,

              }
            }
        ]
      };
      return (
          <CustomSlider {...settings}>
            {this.props.children}
          </CustomSlider>
      );
    }
  }