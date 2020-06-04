import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import UserDetail from './UserDetail';

class App extends React.Component {
  render() {
    return(
      <div style={{margin: '10px'}} className="ui container">
        <BrowserRouter>
          <SearchBar />
          <Route path='/' exact component={ImageList} />
          <Route path='/userdetail' component={UserDetail} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;