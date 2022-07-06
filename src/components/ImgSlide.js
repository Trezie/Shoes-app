import React from 'react'
import styled from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";


function ImgSlide() {
    const images = [
        { url: "/img/boot11.jpeg" },
        { url: "/img/boot11.jpeg" },
        { url: "/img/boot11.jpeg" },

    ];
  return (

    <Img>
        <SimpleImageSlider
            width={380}
            height={250}
            images={images}
            showBullets={true}
            showNavs={true}
          
        />
    </Img>
  )
}

export default ImgSlide

const Img = styled.div`
  @media only screen and (max-width: 768px) {
    width: 220px;

  }
`