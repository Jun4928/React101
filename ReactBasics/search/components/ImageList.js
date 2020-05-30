import './css/ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {
  const {images} = props;

  const onImageClick = (image) => {
    props.onImageClick(image);
  }

  const showImages = images.map((image) => {
    return <ImageItem key={image.id} image={image} onImageClick={onImageClick}/>
  });

  return(
    <div className="image-list">
      {showImages}
    </div>
  )
};

export default ImageList;