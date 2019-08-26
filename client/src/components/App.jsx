import React, { Component } from 'react';
import HeroImages from './HeroImages.jsx';
import PopGallery from './PopGallery.jsx';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
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