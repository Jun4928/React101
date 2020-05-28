import './ImageViewer.css';
import React from 'react';

const ImageViewer = (props) => {
  const {image} = props;

  if(image === null) return <div>Please Search your Image First</div>;

  const onHeartClick = () => {
    props.onHeartClick(image);
  }

  return (
    <div className="image-viewer">
      <img className="image" alt={image.alt} src={image.url} />

      <div className="meta">
        <div onClick={onHeartClick}>
          <i className="heart outline like icon"></i>
          {image.likes} likes
        </div>
        <div className="space"></div>
        <div>{image.date}</div>
      </div>

      <div className="author-info">
        <div className="user-avatar">
          <img className="avatar" alt={image.author} src={image.avatar} />
        </div>
        <div className="user-name">
          {image.author}
        </div>
      </div>
      <div className="user-text">{image.text}</div>
    </div>
  )
};

export default ImageViewer;