import './App.css';
import React from 'react'
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';

const KEY = "AIzaSyCqDnvCYEK2gfITPhMSqTpFs58IDGBxG1o";

class App extends React.Component {
  state = {videos: [], video: null}; 

  onSearchBarSubmit = async (input) => {
    const response = await youtube.get('/search', {
      params: {
        q: input,
        part: "snippet",
        maxResults: 10,
        key: KEY,
        type: "video"
      }
    });
    const videos = response.data.items;
    console.log(videos);
    this.setState({video: videos[0], videos: videos});
  }

  onVideoClick = (video) => {
    this.setState({video: video});
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        <div className="video-container">
          <VideoDisplay video={this.state.video}/>
          <VideoList onVideoClick={this.onVideoClick} videos={this.state.videos} />
          </div>
      </div>
    );
  }
}

export default App;