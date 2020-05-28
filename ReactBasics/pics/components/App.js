import './App.css';
import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageViewer from './ImageViewer';

class App extends React.Component {
  state = {images: [], image: null, data: null};

  onSearch = async (input) => {
    const response = await unsplash.get('/search/photos', 
    {
      params: {
        query: input,
        page: 1,
        per_page: 5 
    }});

    const images = response.data.results;
    console.log(images);
    this.setState({images: images, image: images[0], data: null});
  }

  onImageClick = (image, data) => {
    this.setState({image: image, data: data});
  }

  render() {
    return(
      <div className="ui container"> 
        <SearchBar onSearch={this.onSearch}/>
        <div className="content-container">
          <ImageViewer image={this.state.image} data={this.state.data}/>
          <ImageList onImageClick={this.onImageClick} images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;