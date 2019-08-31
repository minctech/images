import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';
import axios from 'axios';
import { createGlobalStyle } from "styled-components";

const RalewayFont = createGlobalStyle`
  body {
    @import url(https://fonts.googleapis.com/css?family=Raleway);
    font-family: 'Raleway', sans-serif;
  }
`

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       images:[],
       tinyGalleryImages: undefined,
       imagesForHero: undefined,
       toggle: false,
       currentPhoto:{},
       backButtonImage:{},
       nextButtonImage:{},
       imagesLength: 0
    }
    this.onToggle = this.onToggle.bind(this)
    this.changeCurrentPhoto = this.changeCurrentPhoto.bind(this)
  }

  componentDidMount(){
    return axios.get('api/listings/1')
    .then((response) => {
      this.setState({
        images: response.data[0].images,
        imagesForHero: response.data[0].images.slice(0,5),
        currentPhoto: response.data[0].images[0],
        imagesLength: response.data[0].images.length
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onToggle(){
    let currentToggle = this.state.toggle;
    this.setState({toggle: !currentToggle})
  }

  nextFinder(current){
    let currentPlaceNumber = current.imagePlaceNumber;
    let images = this.state.images;
    if (images[currentPlaceNumber] === undefined){
      return images[0]
    } else {
      return images[currentPlaceNumber]
    }
  }

  backFinder(current){
    let currentPlaceNumber = current.imagePlaceNumber;
    let images = this.state.images;
    if (images[currentPlaceNumber - 2] === undefined){
      return images[images.length - 1]
    } else if (images[currentPlaceNumber - 3] === undefined) {
      return images[currentPlaceNumber - 2]
    } else {
      return images[currentPlaceNumber - 2]
    }
  }

  counterFinder(current){
    let currentPlaceNumber = current.imagePlaceNumber;
    let images = this.state.images;
    if (images[currentPlaceNumber - 2] === undefined){
      return -1
    } else if (images[currentPlaceNumber] === undefined){
      return -5
    }else if (images[currentPlaceNumber - 3] === undefined) {
      return -2
    } else if (images[currentPlaceNumber + 1] === undefined) {
      return -4
    } else {
      return -3
    }
  }
  changeCurrentPhoto(current){
    let back = this.backFinder(current);
    let next = this.nextFinder(current);
    let currentPlaceNumber = current.imagePlaceNumber;
    let images = this.state.images;
    let counter = this.counterFinder(current);
    let newImagesArray = [];
    const arrayCreator = () => {
      //base case
      // if newImagesArray has a length of 5
      if (newImagesArray.length === 5){
        //return nothing
        return;
      }
      // recursive case
      // push of images with the index of placement number to newImagesArray
      newImagesArray.push(images[currentPlaceNumber + counter])
      //add one to counter
      counter++
      // run function again
      arrayCreator()
    }

    arrayCreator()
     this.setState({
       currentPhoto: current,
       backButtonImage: back,
       nextButtonImage: next,
       tinyGalleryImages: newImagesArray,
       toggle:true
      })
  }

  render(){
    return (
      <div>
        <RalewayFont />
        {this.state.imagesForHero && !this.state.toggle &&
        <HeroImages
           changeCurrentPhoto={this.changeCurrentPhoto}
           imagesForHero={this.state.imagesForHero}
           onToggle={this.onToggle}
        />
        }
        {this.state.toggle &&
        <PopGallery
          changeCurrentPhoto={this.changeCurrentPhoto}
          currentPhoto={this.state.currentPhoto}
          tinyGalleryImages={this.state.tinyGalleryImages}
          onToggle={this.onToggle}
          backButtonImage = {this.state.backButtonImage}
          nextButtonImage = {this.state.nextButtonImage}
          imagesLength = {this.state.imagesLength}
        />
        }
      </div>
    )
  }
}
export default App;
