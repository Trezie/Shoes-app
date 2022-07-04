import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components';

function Slide8() {
    const images = [
        { url: "/img/boot88.jpeg" },
        { url: "/img/boot88.jpeg" },
        { url: "/img/boot88.jpeg" },

    ];  
  return (
    <div>
        <SimpleImageSlider
            width={320}
            height={250}
            images={images}
            showBullets={true}
            showNavs={true}
        />   
        <AddToCart>
            <First>
              <h3>Chelsea Boot</h3>
              <h5>Boots</h5>
            </First>
            <BtnGrp>
              <Words>
                <h6>COD: BRW-CB</h6>
                <h3>GHS 145.00</h3>
                <h4>GHS 150.00</h4>
              </Words>
              <AddCartButton>
                <span>Add to cart</span>
              </AddCartButton>
            </BtnGrp>

            

        </AddToCart>            
    </div>
  )
}

export default Slide8
const AddToCart = styled.div`
    padding: 10px;
    background-color: #F0F0F0;
    width: 300px;
    height: 150px;

    h4{
        text-decoration: line-through;
    }
    h6{
        opacity: 0.5;
    }
    h3{
        opacity: 1;
    }

`
const First = styled.button`
    width: 100%;
    display: flex;
    border: none;
    justify-content: space-between;

    h5{
        margin-left: 150px;
    }
    
    
`

const BtnGrp = styled.button`
    display: flex;
    outline: none;
    border: none;
    justify-content: space-between;
    flex_direction: column;

    flex-grow: 1;
`
const AddCartButton = styled.button`
    width: 120px;
    height: 48px;
    margin-top: 50px;
    padding: 0 5px;
    background: #826644;
    border-radius: 15px;
    margin-left: 50px;
    cursor: pointer;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: none;
    background: rgb (249, 249, 249); 
    border: solid 1px #6F4E37;

    &:hover {
        background: rgb(198, 198, 198);
    }

    span{
        display: flex;
        color: white;
        font-weight: 700;
        font-size: 15px
    }

`
const BuyNowButton = styled.button`
width: 120px;
height: 48px;
padding: 0 5px;
background: #826644;
border-radius: 15px;
cursor: pointer;
letter-spacing: 0.5px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 22px;
font-size: 15px;
border: none;
background: rgb (249, 249, 249); 
border: solid 1px #6F4E37;

&:hover {
    background: rgb(198, 198, 198);
}

span{
    color: white;
    font-weight: 700;
    font-size: 15px;
}
`
const MessageSeller = styled.button`
    width: 160px;
    height: 48px;
    padding: 0 5px;
    background: white;
    border-radius: 15px;
    cursor: pointer;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    border: none;
    border: solid 1px #6F4E37;

    &:hover {
        background: rgb(198, 198, 198);
    }

    span{
        color: #826644;
        font-weight: 700;
        font-size: 15px;
    }

`
const Words = styled.button`
  display: flex;
  flex-direction: column;
  outline: none;
  border: none;
  justify-content: flex-start;
  line-height: .1px;


`

