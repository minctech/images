import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
   height: 65px;
   width: 65px;
   border-radius: 15px;
   opacity: 0.5;
   margin: 5px;
   &:hover {
    opacity: 1;
  }

`
const CurrentImg = styled.img`
   height: 65px;
   width: 65px;
   margin: 5px;
   border: 2px solid #021a40;
   border-radius: 15px;
   opacity: 1;

`

const TinyGallery = (props) => (
  <div id="tiny-gallery">
    {props.tinyGalleryImages.map((image, index) =>{
      if(image.imageId === props.currentPhoto.imageId){
       return (<CurrentImg key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else {
      return (<Img key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      }
    })}
  </div>
)

export default TinyGallery;