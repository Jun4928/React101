import './css/VideoList.css';
import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = (props) => {
  const {videos} = props;
  const showVideos = videos.map((video) => {
    return <VideoItem key={video.id} video={video}/> 
  });

  return(
    <div className="video-list">
      {showVideos}
    </div>
  )
};

export default VideoList;