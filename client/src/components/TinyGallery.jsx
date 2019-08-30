import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
    opacity: 1;
  }

`
const CurrentImg = styled.img`
  height: 65px;
  width: 65px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
  opacity: 1;

`

const EndImgs = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
  -webkit-clip-path: inset(0 52% 0 0);
  clip-path: inset(0 52% 0 0);
`

const CurrentEndImg = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
  opacity: 1;
  }
  -webkit-clip-path: inset(0 71% 0 0);
  clip-path: inset(0 71% 0 0);
`

const TinyGallery = (props) => (
  <div id="tiny-gallery">
    {props.tinyGalleryImages.map((image, index) =>{
      if(image.imageId === props.currentPhoto.imageId){
        return (<CurrentImg key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else if (props.tinyGalleryImages.length - 1 === index && props.tinyGalleryImages[0].imageId === props.currentPhoto.imageId) {
        return (<CurrentEndImg key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else if(index === 0  || props.tinyGalleryImages.length - 1 === index){
        return (<EndImgs key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else {
        return (<Img key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      }
    })}
  </div>
)

export default TinyGallery;