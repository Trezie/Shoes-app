import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import styled from 'styled-components'
import { faCircleDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider1 from './Slide1'
import Slider2 from './Slide2'
import Slides3 from './Slides3'
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import Slide6 from './Slide6'
import Slide7 from './Slide7'
import Slide8 from './Slide8'
import Slide9 from './Slide9'
import Slide10 from './Slide10'
import Slide11 from './Slide11'
import Slide12 from './Slide12'
import Slide13 from './Slide13'
import Slide14 from './Slide14'
import Slide15 from './Slide15'
import { device } from './device';
import "./responsive.css"
import { Row, Col } from 'react-bootstrap'

import Header from './Header'
import Shoes from './Shoes'
import "../index"
import { height } from "@mui/system";


function Home() {
  return (
    <div>
      <Menu>
        <InitialBar>

        </InitialBar>
        <Sidebar>
          <Container>
            <h4>Categories</h4>
            <FirstLine>
                <FontAwesomeIcon icon={faCircleDot} color="#6F4E37"/>
                <span>All</span>
            </FirstLine>
            <p>Chelsea Boots</p>
            <p>Oxford Shoes</p>
            <p>Sneakers</p>
          </Container>

          <Contain>
            <h4>Sort by</h4>
            <FirstLine>
                <FontAwesomeIcon icon={faCircleDot} color="#6F4E37"/>
                <span>categories</span>
            </FirstLine>
            <p>Lowest price</p>
            <p>Highest price</p>
            <p>A - Z</p>
            <p>Z - A</p>
          </Contain>

          <Container>
            <h4>Layout</h4>
            <FirstLine>
                <FontAwesomeIcon icon={faCircleDot} color="#6F4E37"/>
                <span>Instaview</span>
            </FirstLine>
            <p>List view</p>
            

          </Container>
          <Container>
            <h4>Store Info</h4>
            <FirstLine>
                <img src="/img/whats-removebg-preview.png"/>
                <span>+233 203 567 890</span>
            </FirstLine>
            <p></p>
            <FirstLine>
                <FontAwesomeIcon icon={faPhone} color="#6F4E37"/>
                <span>+233 203 567 890</span>
            </FirstLine>
            <p></p>
            <FirstLine>
                <FontAwesomeIcon icon={faCircleDot} color="#6F4E37"/>
                <span>@Emmy_shoes</span>
            </FirstLine>
            <p></p>
            <FirstLine>
            <img src="/img/facebook-removebg-preview.png"/>
                <span>@Emmy_shoes</span>
            </FirstLine>
            <p></p>
            <FirstLine>
            <img src="/img/location-removebg-preview.png"/>
                <span>Accra, Ghana</span>
            </FirstLine>
            <p></p>
            <FirstLine>
                <FontAwesomeIcon icon={faEnvelope} color="#6F4E37"/>
                <span>emmy_shoes@gmail.com</span>
            </FirstLine>

            <h5>Working hours 9am-6pm Mon-Sat</h5>

          </Container>
        </Sidebar>
        <Mainbar>
          <Content>
            <h4>All</h4>
            
          </Content>
          <Box>
            
                <Containme>


                  <Wrap >
                    <Slider1  />
                  </Wrap>
                  <Wrap>
                    <Slider2 />
                  </Wrap>
                  <Wrap>
                    <Slides3 />
                  </Wrap>  
                  <Wrap>
                    <Slide4 />
                  </Wrap>
                  <Wrap>
                    <Slide5 />
                  </Wrap>
                  <Wrap>
                    <Slide6 />
                  </Wrap>
                  <Wrap>
                    <Slide7 />
                  </Wrap>
                  <Wrap>
                    <Slide8 />
                  </Wrap>
                  <Wrap>
                    <Slide9 />
                  </Wrap>
                  <Wrap>
                    <Slide10 />
                  </Wrap>
                  <Wrap>
                    <Slide11 />
                  </Wrap>
                    
                  <Wrap>
                    <Slide12 />
                  </Wrap>    
                  <Wrap>
                    <Slide13 />

                  </Wrap>
                    
                  <Wrap>
                    <Slide14 />

                  </Wrap>
                    
                  <Wrap>
                    <Slide15 />

                  </Wrap> 

                </Containme>    
            
            <TopBox>
              
              

            </TopBox>

              
             

          </Box>

        </Mainbar>

      </Menu>
    </div>
  )
}

export default Home

const Menu = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh-5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  margin-left: 30px
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
  
 
  }

  @media only screen and (max-width: 475px) {
  
  }
  



`
const InitialBar = styled.div`
  margin-left:30px;

  @media only screen and (max-width: 768px) {
    display: none;
    
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }   
  

`

const Sidebar = styled.div`
  width: 20%;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    display: none;

    
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }  

`

const Mainbar = styled.div`
  margin-left: 30px;

`
const Contain = styled.div`
  margin-top: 60px;
  border-bottom: 1px solid #6F4E37;
  color: #6F4E37;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 5px;
    background: black;

  
  }

  span{
    font-size: 20px;
    font-weight: 100px;
    color: #6F4E37;
    cursor: pointer;

  }

  img{
    height: 15px;
    color: #6F4E37;

    &:hover {
      background: rgb(198, 198, 198);
    }
  }
  


  p{
    margin-left: 26px;
    cursor: pointer;

    &:hover {
      background: rgb(198, 198, 198);
    }
  }

  

  @media only screen and (max-width: 768px) {
    display: none;
    
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }  
`
const FirstLine = styled.div`
  img{
    height: 15px;
  }

  span{
    margin-left: 10px;
  }

`

const Content = styled.div`
  margin-top: 60px;
  color: #6F4E37;
  width={450}
  height={250}


  h4{
    font-size: 20px;
    font-weight: 100px;
    padding-bottom: 10px;
    padding-right: 25px;
    position: relative;



    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 5px;
      background: black;
  
    
    }
  

  }
  span{
    height: 7px;
    width: 30px;
  }

`
const line = styled.div `
  height: 10px;
  width: 10px;
  background: black;
  


  span{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: #6F4E37;
  }

`

const Box = styled.div`

`
const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

`
const Back = styled.div`
  height: 300px;
  top: 0;
  buttom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;



  img {
    object-fit: cover;
    background-size: auto;
    background-position: center;
  }   

}
`
const Arrows = styled.div`
  display: flex;
  flexgrow: 1;
  justify-content: space-between;
`

const Arrowl = styled.div`
  img{
    height: 20px;
  }
  
`
const Arrowr = styled.div`
  img{
    height: 20px;  
  }
  
`
const Dots = styled.div`
  img{
    height: 80px;
  }
`
const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 330px 330px 330px;
  grid-gap: 15px;
  grid-auto-flow: row;


`
const Wrap =styled.div`
  @media only screen and (max-width: 768px) {
    height: 50%;
    width: 30%;
    
  }

  @media only screen and (max-width: 475px) {
    height: 50%;
    width: 30%;
  }   
 
`
const Containme =styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 330px 330px 330px;
  grid-gap: 15px;
  grid-auto-flow: row;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1em;
    grid-row-gap: 40px;
    
  }



`
const Container = styled.div`
  border-bottom: 1px solid #6F4E37;
  img{
    cursor: pointer;

    &:hover {
      background: rgb(198, 198, 198);
    }
  }

  p{
    cursor: pointer;

    &:hover {
      background: rgb(198, 198, 198);
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
    
  }

  @media only screen and (max-width: 475px) {
    display: none;
  }  
`