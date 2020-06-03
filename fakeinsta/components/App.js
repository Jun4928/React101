import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return(
      <div style={{margin: '10px'}} className="ui container">
        <SearchBar />
        ImageList -> ImageItem <br/>
        ImageDetail
      </div>
    );
  }
}

export default App;