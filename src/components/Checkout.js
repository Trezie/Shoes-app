import React from 'react'
import ImgSlide from './ImgSlide';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';
import Footer from './Footer';

function Checkout() {
  return (
    <Main>
        <TopSection>
            <Boot>
                <FirstLine>
                    <FontAwesomeIcon icon={faArrowLeft} color="#6F4E37" />
                    <h6>Continue Shopping</h6>
                </FirstLine>
                <ImgSlide />
                <Grid>
                    <Wrap>
                        <img src="/img/boot11.jpeg"/>
                    </Wrap>
                    <Container>
                        <img src="img/boot11.jpeg"/>
                    </Container>
                    <Container>
                        <img src="img/boot11.jpeg"/>
                    </Container>
                    <Container>
                        <img src="img/boot11.jpeg"/>
                    </Container>
                </Grid>
            </Boot>
            <AddToCart>
                <First>
                    <h2>Chelsea Boot</h2>
                    <h5>Boots</h5>
                </First>
                <h6>COD: BRW-CB</h6>
                <h3>GHS 145.00</h3>
                <h4>GHS 150.00</h4>
                <h5>Size: 39</h5>
                <BtnGrp>
                    <AddCartButton>
                        <span>Add to cart</span>

                    </AddCartButton>
                    <BuyNowButton>
                        <span>Buy now</span>

                    </BuyNowButton>
                    <MessageSeller>
                        <span>Message Seller</span>

                    </MessageSeller>
                </BtnGrp>

            </AddToCart>
        </TopSection>
        <SimilarItem>
            <h1>Similar Items</h1>
            <SimilarGrid>
                <GridBox>
                    <Picture>
                        <img src='/img/boot16.jpg'/>
                    </Picture>
                    <Words>
                        <h3>Chelsea Boot</h3>
                        <h6>COD: BRW-CB</h6>
                        <h3>GHS 145.00</h3>
                        <h4>GHS 150.00</h4>
                        <h5>Size: 39</h5>
                    </Words>
                    <AddCartButton>
                        <span>Add to cart</span>
                    </AddCartButton>
                </GridBox>
                <GridBox>
                    <Picture>
                        <img src='/img/boot77.jpeg'/>
                    </Picture>
                    <Words>
                        <h3>Chelsea Boot</h3>
                        <h6>COD: BRW-CB</h6>
                        <h3>GHS 145.00</h3>
                        <h4>GHS 150.00</h4>
                        <h5>Size: 39</h5>                        
                    </Words>
                    <AddCartButton>
                            <span>Add to cart</span>
                    </AddCartButton>
                </GridBox>
                <GridBox>
                    <Picture>
                        <img src='/img/boot13.jpeg'/>
                    </Picture>
                    <Words>
                        <h3>Chelsea Boot</h3>
                        <h6>COD: BRW-CB</h6>
                        <h3>GHS 145.00</h3>
                        <h4>GHS 150.00</h4>
                        <h5>Size: 39</h5>
                    </Words>
                    <AddCartButton>
                        <span>Add to cart</span>
                    </AddCartButton>
                </GridBox>
                <GridBox>
                    <Picture>
                        <Set>
                            <img src='/img/boot1818.jpeg'/>
                        </Set>
                    </Picture>
                    <Words>
                        <h3>Chelsea Boot</h3>
                        <h6>COD: BRW-CB</h6>
                        <h3>GHS 145.00</h3>
                        <h4>GHS 150.00</h4>
                        <h5>Size: 39</h5>
                    </Words>
                    <AddCartButton>
                        <span>Add to cart</span>
                    </AddCartButton>
                </GridBox>
            </SimilarGrid>

        </SimilarItem>

       

    </Main>
  )
}

export default Checkout;

const Main = styled.div`
    padding: 10px 100px;
    box-sizing: border-box;

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vh-5px);
    position: relative;
    overflow-x: hidden;
    width: 100%;
  
`
const FirstLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h6{
        margin-left: 20px;
    }
`
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

`
const Boot = styled.div`


`
const Grid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-gap: 15px;
    grid-auto-flow: row;

`
const Wrap = styled.div`
    img{
        height: 70px;
    }
    
`
const Container = styled.div`
    opacity: 0.5;
    img{
        height: 70px;
    }
  
`
const AddToCart = styled.div`
    padding: 25px;
    margin-top: 60px;
    background-color: #F0F0F0;
    width: 560px;
    height: 290px;

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
        margin-right: 100px;
    }
    
    
`

const BtnGrp = styled.button`
    display: flex;
    outline: none;
    border: none;
    justify-content: flex-start;
`
const AddCartButton = styled.button`
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
const SimilarItem = styled.button`
    margin-top: 120px;
    background: white; 
    border: none;

    h1{
        margin-left: 10px;
        display: flex;
        justify-content: flex-start;
    }
`
const Picture = styled.button`
    background: white; 
    border: none;
`
const Words = styled.button`
    background: white; 
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

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
const SimilarGrid = styled.button`
    background: white; 
    display: grid;
    border: none;
    margin-top: 20px;
    flex-direction: row;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-gap: 50px;
    grid-auto-flow: row;
`
const GridBox = styled.div`
    background: white; 
    
`
const Set = styled.div`
    img{
        height: 180px;
        object-fit: contain;
        width: 100%;
    }
    
`