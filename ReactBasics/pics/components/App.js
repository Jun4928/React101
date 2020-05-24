import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import History from './History';
import ImageList from './ImageList';

class App extends React.Component {
  state = {history: [], images: []}

  onSearchBarSubmit = async (input) => {
    this.setState({history: [...this.state.history, input] });
    const axiosOption = { params: {query: input} };

    const response = await unsplash.get('/search/photos', axiosOption);
    const results = response.data.results;
    const images = [];
    results.forEach((result) => images.push(result.urls.small));
    this.setState({images: images});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <History history={this.state.history} />
        <ImageList images={this.state.images}/>
      </div> 
   );
  }
}


export default App;