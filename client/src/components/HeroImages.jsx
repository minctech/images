import React, { Component } from 'react';


const HeroImages = (props) => (
  <div>
    <div>
      <img onClick={props.onToggle} src={props.imagesForHero[0].imageSource}/>
    </div>
    <div>
      <img onClick={props.onToggle} src={props.imagesForHero[1].imageSource}/>
    </div>
      <img onClick={props.onToggle} src={props.imagesForHero[2].imageSource}/>
    <div>
      <img onClick={props.onToggle} src={props.imagesForHero[3].imageSource}/>
    </div>
    <div>
      <img onClick={props.onToggle} src={props.imagesForHero[4].imageSource}/>
    </div>
  </div>
);

export default HeroImages;