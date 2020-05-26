import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import History from './History';
import ImageList from './ImageList';

class App extends React.Component {
  state = {history: [], images: []};

  onImageSearch = async (input) => {
    this.setState({history: [...this.state.history, input]});

    const unsplashOption = { params: { query: input } };
    const response = await unsplash.get('/search/photos', unsplashOption);
    const results = response.data.results;

    this.setState({images: results});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onImageSearch={this.onImageSearch}/>
        <History history={this.state.history}/>
        Found {this.state.images.length} items
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;