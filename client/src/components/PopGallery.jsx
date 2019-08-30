import React, { Component } from 'react';
import TinyGallery from './TinyGallery.jsx';
import styled from 'styled-components';


const TopStyle = styled.div`
  padding: 5px;
`
const Grid = styled.div `
  display: flex;
  flex-direction: row;
`

const CurrentImg = styled.img`
  height: 600px;
  width: 700px;
  border-radius: 30px;
`
const TinyGalleryDesigner = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 75px;
  max-width: 400px;
  overflow: hidden;

`
const XButton = styled.div`
   display: flex;
   height: 50px;
   width: 50px;
   justify-content: flex-end;

`
const Description = styled.div`
  width: 400px;
  height: 350px;
  margin: auto;
`

const GalleryButton = styled.img`
  height: 600px;
  width: 200px;
`
const PopGallery = (props) => (
  <div>
    <TopStyle/>
    <XButton>
      <img className="x-button" onClick={props.onToggle} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/x+close+button.PNG"/>
    </XButton>
    <Grid>
      <div className="currentPhotoSection">
        <GalleryButton className="backButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/back+button.PNG"/>
        <CurrentImg className="currentPhoto" src={props.currentPhoto.imageSource}/>
        <GalleryButton className="nextButton" onClick={()=>(props.changeCurrentPhoto(props.nextButtonImage))} src="https://images-for-fec-project.s3-us-west-1.amazonaws.com/next+buton.PNG"/>
      </div>
    <Description>

     <TinyGalleryDesigner>
       <TinyGallery changeCurrentPhoto={props.changeCurrentPhoto} className="tiny-gallery" tinyGalleryImages={props.tinyGalleryImages} currentPhoto={props.currentPhoto}/>
    </TinyGalleryDesigner>


      <div className="currentPhotoDescriptionSection">
        <div className="image-tracker">{`${props.currentPhoto.imagePlaceNumber} / ${props.images.length}`}</div>
        <div className="description">{props.currentPhoto.imageDescription}</div>
      </div>
    </Description>
    </Grid>
  </div>
);


export default PopGallery;