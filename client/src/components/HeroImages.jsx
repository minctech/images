import React, { Component } from 'react';


const HeroImages = (props) => (
  <div>
<<<<<<< HEAD
    <div>
      <img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[0])}} src={props.imagesForHero[0].imageSource}/>
    </div>
    <div>
      <img  onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[1])}} src={props.imagesForHero[1].imageSource}/>
    </div>
      <img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[2])}} src={props.imagesForHero[2].imageSource}/>
    <div>
      <img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[3])}} src={props.imagesForHero[3].imageSource}/>
    </div>
    <div>
      <img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[4])}} src={props.imagesForHero[4].imageSource}/>
    </div>
=======
    <p>HeroImages</p>
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
  </div>
);

export default HeroImages;