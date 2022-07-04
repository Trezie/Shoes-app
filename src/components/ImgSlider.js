import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }
      
      
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/img/boot1.jpeg" alt=""/>
            </Wrap>
            <span>Hello</span>
        </Carousel>                 
    )
      
  
}

export default ImgSlider

const Carousel = styled(Slider)`
  height: 20%;
  width: 20%;
  position: relative;
  overflow-x: hidden;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flexgrow: 1;
  

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150,150,171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }


`

const Wrap = styled.div`
  cursor: pointer;
  height: 280px;
  weight: 280px;
  img {
    height: 20%;
    width: 100%;
    border-radius: 10px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    
    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
    }
  
  }
`  