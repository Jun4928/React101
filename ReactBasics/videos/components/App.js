import './App.css';
import React from 'react'
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const KEY = "AIzaSyCqDnvCYEK2gfITPhMSqTpFs58IDGBxG1o";

class App extends React.Component {
  state = {videos: []};

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
    const items = response.data.items;
    console.log(items);
    this.setState({videos: items});
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        <div className="video-container">
          <div className="video-detail">
            Video Detail
          </div>
          <VideoList videos={this.state.videos} />
          </div>
        </div>
    );
  }
}

export default App;