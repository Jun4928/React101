import './VideoList.css';
import VideoItem from './VideoItem';
import React from 'react';

class VideoList extends React.Component {

  onVideoClick = (video) => {
    this.props.onVideoClick(video);
  }

  showVideoList = () => {
    return this.props.videos.map((video) => {
      return ( <VideoItem onVideoClick={this.onVideoClick} key={video.etag} video={video}/> );
    });
  }

  render() {
    return(
      <div className="video-list">
        {this.showVideoList()}
      </div>
    );
  }
}

export default VideoList;