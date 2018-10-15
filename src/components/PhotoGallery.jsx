import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import { Arrow, GalleryWrapper, SlidesWrapper } from '../styles/StyledPhotoGallery';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    }
  }

  handleClick(index) {
    const galleryLength = this.props.photos.length;
    if (index < 0) index += galleryLength;
    if (index > galleryLength) index = index % galleryLength;
    this.setState({ currentSlide: index });
  }

  render() {
    const { photos } = this.props;
    const offset = this.state.currentSlide < photos.length ? -this.state.currentSlide * 100 : 0;

    if (photos.length === 0) return 'empty gallery';

    const Previous = () => (
      <Arrow previous onClick={() => this.handleClick(this.state.currentSlide - 1)} >
        <span>Previous</span>
      </Arrow>
    );
    
    const Next = () => (
      <Arrow next onClick={() => this.handleClick(this.state.currentSlide + 1)} >
        <span>Next</span>
      </Arrow>
    );

    return (
      <GalleryWrapper>
        <Previous />
        <SlidesWrapper offset={offset}>
          { photos.map( photo => <Photo key={photo.id} url={photo.url} caption={photo.caption} /> ) }
        </SlidesWrapper>
        <Next />
      </GalleryWrapper>
    )
  }
}

PhotoGallery.propTypes = {
  photos: PropTypes.array,
}

PhotoGallery.defaultProps = {
  photos: [],
};

export default PhotoGallery;