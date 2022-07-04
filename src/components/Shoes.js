import React from 'react'
import styled from 'styled-components'

function Shoes() {
  return (
    <TopBar>
                    
      <Back>
          <img src='/img/boot11.jpeg' />
      </Back>
      <All>
        <Arrows>
            <Arrowl>
                <img src='/img/arrowr-removebg-preview.png' />
            </Arrowl>
            <Arrowr>
                <img src='/img/newarrow-removebg-preview.png' />
            </Arrowr>
        </Arrows>
        <Dots>
            <img src='/img/dotttt.png' />
        </Dots>
      </All>
              


    </TopBar>
  )
}

export default Shoes
const TopBar = styled.div`
  height: 20%;
  width: 20%;
  position: relative;
  overflow-x: hidden;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flexgrow: 1;


`
const Back = styled.div`
  width: 20%;
  top: 0;
  buttom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  position: relative;



  img {
    object-fit: cover;
    background-size: auto;
    background-position: center;
  }   

}
`
const All = styled.div`
  justify-content: space-between;
  width: 100%;
  position: absolute;
  direction: column;

`
const Arrows = styled.div`
  width; 300px;
  flexgrow: 1;
  display: flex;
  flexgrow: 1;
  justify-content: space-between;
  z-index: 1000;

`
const Arrowl = styled.div`
 
  img{
    height: 20px;
    
  }
  
`
const Arrowr = styled.div`
  padding-right: 20px;
  img{
    height: 20px;  
  }
  
`
const Dots = styled.div`
  position: absolute;

  img{
    height: 30px;
  }
  justify-content: flex-end;
`
