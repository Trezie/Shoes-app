import React from 'react'
import styled from 'styled-components'
//import { makeStyles } from @mui/material/styles'
import {useState} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faCircleUser } from '@fortawesome/free-solid-svg-icons'




function Header() {
  return (
    <div>
     
        <Nav className='col-lg-9 col-md-9'>
   
            <LogoSection className='"col-md-6"'>
                <Logo src="/img/circle2-removebg-preview.png" />
                <h1>Emmy_Shoes</h1>


            </LogoSection>
            
            <>
                <Search>
                    <FontAwesomeIcon icon={faSearch}  />
                    <input type="search" name="" placeholder="search here..." id="search-box" border="none"/>
                    <label for="search-box" class="fas fa-search" FontAwesomeIcon icon={faSearch}> </label>
                
                    
                    
                    
                </Search>
                

                <NavMenu>
                
                </NavMenu>
            </>

            <Wrap className="col-md-6">
                <FontAwesomeIcon icon={faShoppingCart} />                    
                <a>
                    <span>Login </span>
                    <span>/</span>
                    <span>Create account</span>
                </a>
                <FontAwesomeIcon icon={faCircleUser} size="lg" />
                <Image src="/img/circle-user-regular.svg" />
                <Login></Login>               
            </Wrap>
                    
            
        </Nav>


    </div>
  )
}

const Nav = styled.nav`
  height: 70px;
  background-color: #fff;
  display: flex;
  flexgrow: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
  border: solid #DCDCDC 1px;

`

const LogoSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 300px;
    


    h1{
        align-items: center;
        padding: 0 5px;
        cursor: pointer;
        font-weight: 500;

    }

`
const Logo = styled.img`
  height: 60px;
  
`

const Search = styled.div`
    width: 200px;
    height: 35px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: solid black 1px; 
    padding: 0 10px;

    input{
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        outline: none;
        border-color: transparent;
        margin-left: 20px;
        border-radius: 20px;
        } 
    

`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        display: flex;
        align-items: center;
        padding-left: 10px; 
        cursor: pointer;
        
        span {

            letter-spacing: 0.5px;
            position: relative;
            cursor: pointer;
            color: #6F4E37;

        }

    }
`

const Image = styled.div`
    height =20

`

const Login = styled.div`
`
export default Header