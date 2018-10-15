import React from 'react';
import PropTypes from 'prop-types';
import { Caption, Image, PhotoWrapper } from '../styles/StyledPhoto';

const Photo = (props) => {
  return (
    <PhotoWrapper>
      <Image className='image' role='img' url={props.url} aria-label={props.caption}/>
      { props.caption && <Caption className='caption'>{props.caption}</Caption> }
    </PhotoWrapper>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  caption: PropTypes.string,
}

Photo.defaultProps = {
  caption: '',
};

export default Photo;