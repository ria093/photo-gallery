import React, { Component } from 'react';
import PhotoGallery from './components/PhotoGallery';
import { AppWrapper } from './styles/StyledApp';
import photos from './data/photos.json';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <PhotoGallery photos={photos}/>
      </AppWrapper>
    );
  }
}

export default App;
