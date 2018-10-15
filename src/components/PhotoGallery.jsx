import React from 'react';
import PropTypes from 'prop-types';
import Exception from './Exception';
import Photo from './Photo';
import { Arrow, GalleryWrapper, SlidesWrapper } from '../styles/StyledPhotoGallery';
import constants from '../lib/constants';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      touchStartX: 0,
    }
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleClick(index) {
    const galleryLength = this.props.photos.length;
    if (index < 0) index += galleryLength;
    if (index > galleryLength) index = index % galleryLength;
    this.setState({ currentSlide: index });
  }

  handleTouchStart(e) {
    this.setState({'touchStartX': e.changedTouches[0].screenX})
  }

  handleTouchEnd(e) {
    const swipeDistance = this.state.touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(swipeDistance) > constants.MIN_SWIPE_DISTANCE) {
      (swipeDistance > 0) ? 
        this.handleClick(this.state.currentSlide + 1) :
        this.handleClick(this.state.currentSlide - 1);
    }
  }

  render() {
    const { photos } = this.props;
    const offset = this.state.currentSlide < photos.length ? -this.state.currentSlide * 100 : 0;

    if (photos.length === 0) return <Exception msg={constants.EMPTY_GALLERY_MSG} />;;

    const Previous = () => (
      <Arrow previous tabIndex='1' onClick={() => this.handleClick(this.state.currentSlide - 1)} >
        <span>Previous</span>
      </Arrow>
    );
    
    const Next = () => (
      <Arrow next tabIndex='2' onClick={() => this.handleClick(this.state.currentSlide + 1)} >
        <span>Next</span>
      </Arrow>
    );

    return (
      <GalleryWrapper>
        <Previous />
        <SlidesWrapper offset={offset} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} >
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