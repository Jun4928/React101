import React from 'react';

const ImageList = (props) => {
  const {images} = props;

  const imageDisplay = () => {
    const elements = [];
    images.forEach((image, i) => {
      elements.push(<img alt={`searched ${i}`} key={i} src={image}></img>);
    });

    return elements;
  };

  return (
    <div>
      {imageDisplay()}
    </div>
  );
};

export default ImageList;