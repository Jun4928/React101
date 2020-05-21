import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import SearchedList from './SearchedList';

class App extends React.Component {
  state = { textInput: '', history: [] }

  onUserSubmit(input) { // when the from in SearchBar is submitted
    const history = this.state.history;
    this.setState( { textInput: input, history: [...history, input] } );
  }

  makeHistroy() { // everytime rerenderd when this.setState is called
    console.log('rerendering');
    const searched = [];
    this.state.history.forEach( (each, index) => {
      searched.push(<SearchedList word={each} key={index} />); 
    });

    return searched;
  }
  
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Image Search Web</h1>
        </div>
        <div className="ui container">
          <SearchBar onEnter={this.onUserSubmit.bind(this)}/>
          <div className="ui segment">
            <label>History</label>
            <div className="ui bulleted list">
              {this.makeHistroy()}
            </div>
          </div>
        </div>
        <div className="footer">
          <h3>@image copy reserved</h3>
        </div>
      </div>
    );
  }
}

export default App;