import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const {images} = props;

  const showImages = () => {
    return images.map( (image) => {
      return ( <ImageCard key={image.id} image={image} /> );
    });
  }

  return(
    <div className="image-list">
      {showImages()}
    </div>
  );
}

export default ImageList;