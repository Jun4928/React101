// import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

  state = {video: this.props.video}; 

  onClick = () => {
    this.props.onVideoClick(this.state.video);
  }

  render() {
    const {snippet} = this.props.video;
    const thumbnailsUrl = snippet.thumbnails.medium.url;
    const title = snippet.title;
    const description = snippet.description;

    return(
      // <div onClick={} className="ui link card">
      <div onClick={this.onClick} className="ui link card">
        <div className="image">
          <img alt={description} src={`${thumbnailsUrl}`} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem; 

