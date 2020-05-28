import './ImageItem.css';
import React from 'react';

const ImageItem = (props) => {
  const {image} = props;
 
  const onImageClick = () => {
    props.onImageClick(image);
  }

  return (
    <div onClick={onImageClick} className="image-item">
      <img alt={image.alt} src={image.url}/>
      <div className="header" style={{margin: '5px', fontWeight: 'bold'}}>{image.author}</div>
    </div>
  );
};

export default ImageItem; 