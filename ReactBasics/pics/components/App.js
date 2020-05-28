import './App.css';
import React from 'react';
import faker from 'faker';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageViewer from './ImageViewer';

class App extends React.Component {
  state = {images: [], image: null};

  onSearch = async (input) => {
    const response = await unsplash.get('/search/photos', 
    {
      params: {
        query: input,
        page: 1,
        per_page: 15 
    }});

    const results = response.data.results;
    const images = results.map(result => {
      const {id, urls, alt_description, likes} = result;
      return {
        id: id,
        url: urls.regular,
        alt: alt_description,
        likes: likes,
        avatar: faker.image.avatar(),
        author: faker.name.lastName(),
        date: faker.date.past().toDateString(),
        text: faker.lorem.paragraph()
      };
    });

    this.setState({images: images, image: images[0]});
  }

  onImageClick = (image) => {
    this.setState({image: image});
  }

  onHeartClick = (likedImage) => {
    this.setState(state => { // when update array..
      let changed;
      const images = state.images.map((image) => { // do not mutate the original
        if(image.id === likedImage.id) {
          changed = {...image};
          changed.likes += 1;
          return changed;
        }
        else return image;
      });

      return {
        images: images, // new images array
        image: changed // updated image
      };
    });

  }

  render() {
    return(
      <div className="ui container"> 
        <SearchBar onSearch={this.onSearch}/>
        <div className="content-container">
          <ImageViewer onHeartClick={this.onHeartClick} image={this.state.image}/>
          <ImageList onImageClick={this.onImageClick} images={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;