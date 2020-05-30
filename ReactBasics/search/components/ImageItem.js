import React from 'react';

const ImageItem = (props) => {
  const {url, alt, description} = props.image;

  const onImageClick = () => {
    props.onImageClick(props.image);
  };

  return (
    <div onClick={onImageClick} className="image-item">
      <img className="image" src={url} alt={alt}/>
      <span className="description">{description}</span>
    </div>
  );
};

export default ImageItem;