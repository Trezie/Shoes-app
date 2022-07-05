import './App.css';
import Header from "./components/Header"
import Checkout from './components/Checkout';
import ImgSlider from './components/ImgSlider';
import Home from "./components/Home"
import Shoes from './components/Shoes';
import ImgSlide from './components/ImgSlide';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";



function App() {
  return (
    <div>
      <Router>
        <Header /> 
        <Routes>         
          
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/imgslider" element={<ImgSlider />} /> 
          <Route path="/shoes" element={<Shoes />} /> 
          <Route path="/imgslide" element={<ImgSlide />} /> 
          <Route path="/" element={<Home />} />  
        </Routes>

      </Router>
         

 
    </div>
  );
}

export default App;
