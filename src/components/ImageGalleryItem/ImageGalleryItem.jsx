import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li key={id} className="imageGalleryItem">
      <img className="imageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
