import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       images:[],
       imagesForHero: undefined,
       toggle: false
    }
    this.onToggle = this.onToggle.bind(this)
  }

  componentDidMount(){
    this.getListing()
  }

  getListing(){
    axios.get('api/listings/1')
    .then((response) => {
      this.setState({
        images: response.data[0].images,
        imagesForHero: response.data[0].images.slice(0,5)
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

  render(){
    return (
      <div>
        <p>App</p>
        {this.state.imagesForHero && !this.state.toggle && <HeroImages imagesForHero={this.state.imagesForHero} onToggle={this.onToggle}/> }
        {!this.state.toggle && <button className="show-images" onClick={this.onToggle}>Show Images</button>}
        {this.state.toggle && <PopGallery onToggle={this.onToggle}/>}
      </div>
    )
  }
}

export default App;