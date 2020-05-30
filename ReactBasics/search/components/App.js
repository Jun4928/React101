import './css/App.css';
import youtube from '../apis/youtube';
import unsplash from '../apis/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import ImageList from './ImageList';
import ContentViewer from './ContentViewer';

const YOUTUBE_KEY = "YOUTUBE_KEY";

class App extends React.Component {
  state = {videos: [], images: [], selected: "all", currentContent: null}

  videoSearch = async (input) => {
    const videoResponse = await youtube.get('/search' , 
    {
      params: {
        q: input,
        part: 'snippet',
        maxResults: 10,
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
        thumbnail: video.snippet.thumbnails.medium.url,
        type: "video"
      }
    });
  }

  imageSearch = async (input) => {
    const imageResponse = await unsplash.get('/search/photos', 
    {
      params: {
        query: input,
        per_page: 10
      }
    });

    const imageResults = imageResponse.data.results;
    return imageResults.map((image)=> {
      return {
        id: image.id,
        alt: image.alt_description,
        url: image.urls.regular,
        description: image.description,
        type: "image"
      }
    });
  }

  onSearchSubmit = async ({input, selected}) => {
    console.log('User Input', input);
    console.log('User selected', selected);

    if(selected === "all") {
      const images = await this.imageSearch(input);
      const videos = await this.videoSearch(input);

      this.setState({videos: videos, images: images, selected: selected, currentContent: videos[0]});
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

  onImageClick = (image) => {
    this.setState({currentContent: image});
    const viewer = document.querySelector('.viewer-top');
    viewer.scrollIntoView(true);
  }

  onVideoClick = (video) => {
    this.setState({currentContent: video});
    const viewer = document.querySelector('.viewer-top');
    viewer.scrollIntoView(true);
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="viewer-top"></div>
        <ContentViewer content={this.state.currentContent}/>
        <div className="content-container">
          <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick}/>
          <ImageList images={this.state.images} onImageClick={this.onImageClick}/>
        </div>
      </div>
    );
  }
}

export default App;
