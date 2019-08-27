import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';
<<<<<<< HEAD
import axios from 'axios';
import styled from 'styled-components';


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
=======
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
<<<<<<< HEAD
       images:[],
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
    this.getListing()
  }

  getListing(){
    axios.get('api/listings/1')
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
=======

    }
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
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
<<<<<<< HEAD
        {this.state.imagesForHero && !this.state.toggle &&
        <HeroImages
           changeCurrentPhoto={this.changeCurrentPhoto}
           imagesForHero={this.state.imagesForHero}
           onToggle={this.onToggle}
        />
        }

        {!this.state.toggle && <Button className="show-images" onClick={this.onToggle}>Show Images</Button>}

        {this.state.toggle &&
        <PopGallery
          changeCurrentPhoto={this.changeCurrentPhoto}
          currentPhoto={this.state.currentPhoto}
          images={this.state.images}
          onToggle={this.onToggle}
          backButtonImage = {this.state.backButtonImage}
          nextButtonImage = {this.state.nextButtonImage}
        />
        }
=======
        <p>App</p>
        <HeroImages/>
        <PopGallery/>
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
      </div>
    )
  }
}

export default App;