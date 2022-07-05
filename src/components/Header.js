import React from 'react'
import styled from 'styled-components'
//import { makeStyles } from @mui/material/styles'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faCircleUser, faBars} from '@fortawesome/free-solid-svg-icons'
import  { useState, useEffect, useRef } from "react";
import Side from './Side'







function Header() {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);
    useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
        const closeDrawer = event => {
            if (drawerRef.current && drawerRef.current.contains(event.target)) {
                return;
            }

            toggleDrawer(false);
        };
  
        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    },  []);

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
                    <IconRight>
                        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>   
                        <Bars onClick={() => toggleDrawer(true)}>                 
                            <FontAwesomeIcon icon={faBars} size="lg"/>
                        </Bars>
                        <Open>
                           
                        </Open>
                    </IconRight>
                    <Login>
                        <a>
                            <span>Login </span>
                            <span>/</span>
                            <span>Create account</span>
                        </a>
                        <User>
                            <FontAwesomeIcon icon={faCircleUser} size="lg" />
                        </User>
                    </Login>               
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

  @media (max-width: 769px) {
    #menu-btn {
        width: 30px;
        height: 30px;
        display: initial;
    }
    
    #menu-close {
        display: initial;
        font-size: 1.2rem;
        color: #fff;
        margin: 30px 20px 20px 20px;
    }
  }
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

    @media only screen and (max-width: 768px) {
        display: none;
        
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
    padding-right: 30px;

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
    display: flex;
    a{
        margin-left: 20px;
    }
    @media only screen and (max-width: 768px) {
        display: none;
        
    }    
`
const Bars = styled.div`
    margin-left: 30px;
    width: 30px;
    height: 30px;
    display: none;

    @media only screen and (max-width: 768px) {
        display: initial;
        
    }
    
    @media only screen and (max-width: 475px) {
        display: initial;
    }      

`
const User = styled.div`
    margin-left: 20px;
`
const IconRight = styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
        display: initial;
        
    }
    
    @media only screen and (max-width: 475px) {
        display: initial;
    }      

`
const Open = styled.div`
`
export default Header