import './VideoDisplay.css';
import React from 'react';

const VideoDisplay = (props) => { 
  const showVideo = () => {
    if(props.video === null)  return null;
    else{
      const {id, snippet} = props.video;
      const title = snippet.title;
      const description = snippet.description;
      return (
        <div className="video-display">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${id.videoId}`}>
          </iframe>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      );
    } 
  }

  return(
    <div>
      {showVideo()}
    </div>
  );

}

export default VideoDisplay;
