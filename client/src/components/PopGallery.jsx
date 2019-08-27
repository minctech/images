import React, { Component } from 'react';
import TinyGallery from './TinyGallery.jsx';

const PopGallery = (props) => (
  <div>
    <p onClick={props.onToggle}>PopGallery</p>
    <TinyGallery className="tiny-gallery"/>
    <div id="image-tracker"></div>
    <div className="description"></div>
  </div>
);


export default PopGallery;