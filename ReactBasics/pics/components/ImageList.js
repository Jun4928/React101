import './ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {
  const {images} = props;

  const showImages = () => {
    return images.map((image) => <ImageItem key={image.id} image={image} />);
  };

  return(
    <div className="image-list">
      {showImages()}
    </div>
  );
};

export default ImageList;