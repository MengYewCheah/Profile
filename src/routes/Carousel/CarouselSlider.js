import React, { useContext, useEffect } from "react";
import Arrow from "../../assets/arrow.svg";
import { CarouselContext } from "pure-react-carousel";
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import useWindowSize from "../../hooks/windowSize";
import Card from "./Card";
import LoadMonitoring from '../../assets/loadMonitoring.png';
import Selenium from '../../assets/Selenium.jpeg';
import ReactGithub from '../../assets/ReactGithub.jpg';
import NodeExpressImage from '../../assets/nodejsExpressjs.png';

const CarouselSlider = ({ setSlideCount, setCurrentSlide }) => {
  const screenWidth = useWindowSize();

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <Wrapper>
      <Slider>
        <Slide index={0} className="slide">
          <Card projectImg={ReactGithub} projectName={'Profile Page'} projectDescription={'Using a combination of Github hosting for backend, React and Bootstrap for frontend we can deploy a profile page for FREE.'}/>
        </Slide>
        <Slide index={1}>
          <Card projectImg={NodeExpressImage} projectName={'Load Testing Monitor'} projectDescription={'Creating a real time load monitoring tool using express js API, React and node js that can generate load testing reports.'}/>
        </Slide>
        <Slide index={2}>
          <Card projectImg={Selenium} projectName={'Test Automation'} projectDescription={'Automating test using selenium  js and webdriver. Successfully reduce the number of manual test and created CI/CD pipeline.'}/>
        </Slide>
        {/* <Slide index={3}>
          <Card />
        </Slide>
        <Slide index={4}>
          <Card />
        </Slide>
        <Slide index={5}>
          <Card />
        </Slide> */}
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselSlider;