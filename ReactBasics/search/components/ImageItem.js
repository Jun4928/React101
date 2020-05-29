import React from 'react';

const ImageItem = (props) => {
  const {url, alt, description} = props.image;
  console.log(url, alt, description);
  return (
    <div className="image-item">
      <img className="image" src={url} alt={alt}/>
      <span className="description">{description}</span>
    </div>
  );
};

export default ImageItem;