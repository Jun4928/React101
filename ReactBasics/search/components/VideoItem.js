import React from 'react';

const VideoItem = (props) => {
  const {title, thumbnail} = props.video;

  const onVideoClick = () => {
    props.onVideoClick(props.video);
  }

  return (
    <div className="video-item" onClick={onVideoClick}>
      <img className="image" src={thumbnail} alt={title}/>
      <span className="title">{title}</span>
    </div>
  )

};

export default VideoItem;