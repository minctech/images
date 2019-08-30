import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';
import axios from 'axios';
import styled from 'styled-components'




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
       nextButtonImage:{}
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
        currentPhoto: response.data[0].images[0]
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

  changeCurrentPhoto(current){
    let back;
    let next;
    let newImagesArray = [];
    console.log(current, "current")
   if (this.state.images[current.imagePlaceNumber - 2] === undefined){
     back = this.state.images[this.state.images.length - 1]
     newImagesArray[0] = current
     newImagesArray[1] = this.state.images[current.imagePlaceNumber]
     newImagesArray[2] = this.state.images[current.imagePlaceNumber + 1]
     newImagesArray[3] = this.state.images[current.imagePlaceNumber + 2]
     newImagesArray[4] = this.state.images[current.imagePlaceNumber + 3]
   } else if (this.state.images[current.imagePlaceNumber - 3] === undefined) {
     back = this.state.images[current.imagePlaceNumber - 2]
     newImagesArray[0] = back
     newImagesArray[1] = current
     newImagesArray[2] = this.state.images[current.imagePlaceNumber]
     newImagesArray[3] = this.state.images[current.imagePlaceNumber + 1]
     newImagesArray[4] = this.state.images[current.imagePlaceNumber + 2]
   } else {
     back = this.state.images[current.imagePlaceNumber - 2]
     newImagesArray[0] = this.state.images[current.imagePlaceNumber - 3]
     newImagesArray[1] = back
     newImagesArray[2] = current
     newImagesArray[3] = this.state.images[current.imagePlaceNumber]
     newImagesArray[4] = this.state.images[current.imagePlaceNumber + 1]
   }
    console.log(newImagesArray)
   if (this.state.images[current.imagePlaceNumber] === undefined){
     next = this.state.images[0]
   } else {
     next = this.state.images[current.imagePlaceNumber]
     console.log(next, 'next')
   }
     this.setState({
       currentPhoto: current,
       backButtonImage: back,
       nextButtonImage: next,
       tinyGalleryImages: newImagesArray,
       toggle:true
      })
      console.log(this.state.imagesForHero)

  }

  render(){
    return (
      <div>
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
          images = {this.state.images}
        />
        }
      </div>
    )
  }
}
export default App;
