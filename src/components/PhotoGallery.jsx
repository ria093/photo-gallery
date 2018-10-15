import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, Gallery, Image } from '../styles/StyledPhotoGallery';

class PhotoGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curr: 0,
		}
	}

	handleClick(index) {
    this.setState({ curr: index });
  }

	render() {
		const { photos } = this.props;

		if (photos.length === 0) return 'empty gallery';

		const Previous = () => (
      <Arrow previous onClick={() => this.handleClick(this.state.curr - 1)} >
        <span>Previous</span>
      </Arrow>
    );
    
    const Next = () => (
      <Arrow next onClick={() => this.handleClick(this.state.curr + 1)}  >
        <span>Next</span>
      </Arrow>
    );

		return (
			<Gallery>
				<Previous />
				<Image src={photos[this.state.curr].url} alt={photos[this.state.curr].caption} />
				<Next />
			</Gallery>
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