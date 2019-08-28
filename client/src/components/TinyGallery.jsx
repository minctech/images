import React, { Component } from 'react';

const TinyGallery = (props) => (
  <div id="tiny-gallery">
    {props.images.map((image) =>(
      <img key={image.imageId} className="tiny-image" src={image.imageSource} onClick={()=>(props.changeCurrentPhoto(image))} />
))}
  </div>
)

export default TinyGallery;