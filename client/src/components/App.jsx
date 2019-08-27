import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  changeCurrentPhoto(current){
    let back;
    let next;
   if (this.state.images[current.imagePlaceNumber - 2] === undefined){
     back = this.state.images[this.state.images.length - 1]
   } else {
     back = this.state.images[current.imagePlaceNumber - 2]
   }

   if (this.state.images[current.imagePlaceNumber] === undefined){
     next = this.state.images[0]
   } else {
     next = this.state.images[current.imagePlaceNumber]
   }
     this.setState({
       currentPhoto: current,
       backButtonImage: back,
       nextButtonImage: next,
       toggle:true
      })

  }

  render(){
    return (
      <div>
        <p>App</p>
        <HeroImages/>
        <PopGallery/>
      </div>
    )
  }
}

export default App;