import './css/App.css';
import youtube from '../apis/youtube';
import unsplash from '../apis/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import ImageList from './ImageList';

const YOUTUBE_KEY = "YOUTUBE_KEY";

class App extends React.Component {
  state = {videos: [], images: [], selected: "all"}

  videoSearch = async (input) => {
    const videoResponse = await youtube.get('/search' , 
    {
      params: {
        q: input,
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_KEY,
        type: "video"
      }
      
    });

    const videoResults = videoResponse.data.items;
    return videoResults.map((video) => {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url
      }
    });
  }

  imageSearch = async (input) => {
    const imageResponse = await unsplash.get('/search/photos', 
    {
      params: {
        query: input,
        per_page: 5
      }
    });

    const imageResults = imageResponse.data.results;
    return imageResults.map((image)=> {
      return {
        id: image.id,
        alt: image.alt_description,
        url: image.urls.small,
        description: image.description
      }
    });
  }

  onSearchSubmit = async ({input, selected}) => {
    console.log('User Input', input);
    console.log('User selected', selected);

    if(selected === "all") {
      const images = await this.imageSearch(input);
      console.log(images);

      const videos = await this.videoSearch(input);
      console.log(videos);

      this.setState({videos: videos, images: images, selected: selected});
    }

    // if(selected === "video") {
    //   const videos = await this.videoSearch(input);
    //   console.log(videos);

    // }

    // if(selected === "photo") {
    //   const images = await this.imageSearch(input);
    //   console.log(images);
    // }
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="content-container">
          <VideoList videos={this.state.videos}/>
          <ImageList images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;
