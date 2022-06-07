import React from 'react';
import Header from './components/header/Header.js';
import SliderMove from './components/sliders/SliderMove.js';
import { sliderDataTop } from './components/sliders/slider-data/slider-data-top.js';
import back from './img/back.jpg';

var backround ={
  backgroundImage: `url(${back})`,
  position: 'absolute',
  width: '100vw',
  height: '100vh'
}

export default function App () {
  return (
    <div className="wraper" style={backround}>
      <Header/>
      <SliderMove slides = {sliderDataTop}/>
    </div>
  )
}
