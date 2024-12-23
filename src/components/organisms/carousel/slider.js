import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { LeftArrow, RightArrow } from "@styled-icons/boxicons-regular";

const Left = styled(LeftArrow)`
  color: #2e4057;
  height: 50px;
  margin: 0px 10px 0px 10px;
  &:hover {
    color: #f6cd8b;
  }
`;

const Right = styled(RightArrow)`
  color: #2e4057;
  height: 50px;
  margin: 0px 10px 0px 10px;
  &:hover {
    color: #f6cd8b;
  }
`;

const SCarouselWrapper = styled.div`
  display: flex;
  margin: 0px 20px 20px 0px;
  width: 100vw;
`;

const SCarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0.2)};
  transition: all 1s ease;
  width: 100%;
`;

//margin auto de card se définit en fonction de son composant parent, qui est SCarouselSlides, d'où l'intérêt de définir la width à 100% afin que ça prenne tout l'écran. A permis de centrer les cards dans le slider
const SCarouselSlides = styled.div`
  width: 100%;
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      width: 100%;
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

export const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <Left
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        ></Left>

        <Right
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        ></Right>
      </div>
    </div>
  );
};
