import './ImageList.css';
import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {

  const onImageClick = (image) => {
    props.onImageClick(image);
  }

  const {images} = props;
  if(images.length === 0) return <div></div>;
  
  const imageList = images.map((image) => {
    return <ImageItem onImageClick={onImageClick} key={image.id} image={image}/>
  });

  return (
    <div className="image-list"> 
      {imageList}
    </div>
  );
};

export default ImageList;