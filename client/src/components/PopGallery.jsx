<<<<<<< HEAD
import React, { Component } from 'react';
import TinyGallery from './TinyGallery.jsx';
import styled from 'styled-components';

const Grid = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const XButton = styled.div`
   display: flex;
   justify-content: flex-end;
`
const Description = styled.div`
  width: 300px;
  height: 300px;
`
const PopGallery = (props) => (
  <div>
    <XButton>
      <img className="x-button" onClick={props.onToggle} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/x+close+button.PNG"/>
    </XButton>
    <Grid>
      <div className="currentPhotoSection">
        <img className="backButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/back+button.PNG"/>
        <img className="currentPhoto" src={props.currentPhoto.imageSource}/>
        <img className="nextButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/next+buton.PNG"/>
      </div>
    <Description>
      <div className="currentPhotoDescriptionSection">
        <div className="image-tracker">{`${props.currentPhoto.imagePlaceNumber} / ${props.images.length}`}</div>
        <div className="description">{props.currentPhoto.imageDescription}</div>
      </div>
    </Description>
    </Grid>
    <TinyGallery changeCurrentPhoto={props.changeCurrentPhoto} className="tiny-gallery" images={props.images}/>
  </div>
);


=======
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


>>>>>>> 41e33269bff0dcb6db6c5033fb50faa6e2e30193
export default PopGallery;