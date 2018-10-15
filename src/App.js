import React, { Component } from 'react';
import PhotoGallery from './components/PhotoGallery';
import { AppWrapper } from './styles/StyledApp';

const photos = [
  {
    id: 1234,
    url: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-0.3.5&s=06245466a88d6f1a2f0cab7de2f14bc4&auto=format&fit=crop&w=2106&q=80',
    caption: 'Photo by Daniil Silantev on Unsplash',
  },
  {
    id: 2345,
    url: 'https://images.unsplash.com/photo-1503278501277-e50457741130?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92343e31ee35280b23b6ceb07bc2d838&auto=format&fit=crop&w=2250&q=80',
    caption: 'Photo by Logan Nolin on Unsplash',
  },
  {
    id: 3456,
    url: 'https://images.unsplash.com/photo-1504260225934-74fc53dbdf18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1e00bd0ccff87d094f3e937ac4d190&auto=format&fit=crop&w=934&q=80',
    caption: '',
  }
]


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
