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

    <div>
        <SimpleImageSlider
            width={450}
            height={250}
            images={images}
            showBullets={true}
            showNavs={true}
        />
    </div>
  )
}

export default ImgSlide