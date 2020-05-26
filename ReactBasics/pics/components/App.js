import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import History from './History';
import ImageList from './ImageList';

class App extends React.Component {
  state = {history: [], images: []};

  onSearchBarSubmit = async (input) => {
    this.setState({history: [...this.state.history, input]});

    const getOption = {params: {query: input, per_page: '20'}};
    const response = await unsplash.get('search/photos', getOption);
    const images = response.data.results;

    this.setState({images: images});
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <History history={this.state.history}/>
        Found {this.state.images.length} items
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;