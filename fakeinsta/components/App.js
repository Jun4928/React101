import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  render() {
    return(
      <div style={{margin: '10px'}} className="ui container">
        <SearchBar />
        <div>
          <ImageList />
        </div>
      </div>
    );
  }
}

export default App;