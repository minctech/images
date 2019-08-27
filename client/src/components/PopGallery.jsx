import React, { Component } from 'react';
import TinyGallery from './TinyGallery.jsx';

const PopGallery = (props) => (
  <div>
<<<<<<< HEAD
    <img onClick={props.onToggle} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/x+close+button.PNG"/>
    <div className="currentPhotoSection">
      <img className="backButton" onClick={()=>(props.changeCurrentPhoto(props.backButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/back+button.PNG"/>
      <img className="currentPhoto" src={props.currentPhoto.imageSource}/>
      <img className="nextButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/next+buton.PNG"/>
    </div>
    <div className="currentPhotoDescriptionSection">
      <div id="image-tracker">{`${props.currentPhoto.imagePlaceNumber} / ${props.images.length}`}</div>
      <div className="description">{props.currentPhoto.imageDescription}</div>
    </div>
    <TinyGallery changeCurrentPhoto={props.changeCurrentPhoto} className="tiny-gallery" images={props.images}/>
=======
    <p>PopGallery</p>
    <TinyGallery className="tiny-gallery"/>
    <div id="image-tracker"></div>
    <div className="description"></div>
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
  </div>
);


export default PopGallery;