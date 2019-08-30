import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
    opacity: 1;
  }

`
const CurrentImg = styled.img`
  height: 64px;
  width: 64px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
  opacity: 1;
`

const EndImgs = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
    opacity: 1;
  }
`
const StartImgs = styled.img`
height: 64px;
width: 64px;
border-radius: 5px;
opacity: 0.2;
margin: 5px;
&:hover {
  opacity: 1;
}
`

const CurrentEndImg = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 5px;
  opacity: 0.5;
  margin: 5px;
  &:hover {
  opacity: 1;
  }
`



const TinyGallery = (props) => (
  <div id="tiny-gallery">

    {props.tinyGalleryImages.map((image, index) =>{
      if(image.imageId === props.currentPhoto.imageId){
        return (
        <CurrentImg key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />
        )
      } else if (props.tinyGalleryImages.length - 1 === index && props.tinyGalleryImages[0].imageId === props.currentPhoto.imageId) {
        return (
        <CurrentEndImg key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />
        )
      } else if(index === 0 ){
        return (<StartImgs key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else if ( props.tinyGalleryImages.length - 1 === index){
        return (<EndImgs key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      } else {
        return (<Img key={index} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />)
      }
    })}
  </div>
)

export default TinyGallery;