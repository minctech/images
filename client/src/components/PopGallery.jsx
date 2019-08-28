import React, { Component } from 'react';
import TinyGallery from './TinyGallery.jsx';

const PopGallery = (props) => (
  <div>

    <img className="x-button" onClick={props.onToggle} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/x+close+button.PNG"/>

    <div className="currentPhotoSection">
      <img className="backButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/back+button.PNG"/>
      <img className="currentPhoto" src={props.currentPhoto.imageSource}/>
      <img className="nextButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/next+buton.PNG"/>
    </div>
    <div className="currentPhotoDescriptionSection">
      <div className="image-tracker">{`${props.currentPhoto.imagePlaceNumber} / ${props.images.length}`}</div>
      <div className="description">{props.currentPhoto.imageDescription}</div>
    </div>
    <TinyGallery changeCurrentPhoto={props.changeCurrentPhoto} className="tiny-gallery" images={props.images}/>
  </div>
);


export default PopGallery;