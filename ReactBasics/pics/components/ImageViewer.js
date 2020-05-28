import './ImageViewer.css';
import React from 'react';

const ImageViewer = (props) => {
  const {image, data} = props;

  if(image === null) return <div>Please Search your Image First</div>;
  if(image != null && data === null) return (
     <div className="image-viewer">
      <img alt={image.alt_description} src={`${image.urls.regular}`} />
     </div>
  );

  return (
    <div className="image-viewer">
      <img alt={image.alt_description} src={`${image.urls.regular}`} />
      <i className="heart outline like icon"></i>
      {image.likes} likes
      <div>{data.author}</div>
      <div>{data.date}</div>
      <div>{data.text}</div>
    </div>
  )
};

export default ImageViewer;