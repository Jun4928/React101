import './css/SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  state = {input: '', selected: "all"};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state);
  }

  render() {
    return(
      <div className="ui segment search-bar">
        <div className="search-label">Search {this.state.selected}</div>
        <div className="radio">
          <div className="btn">
            <input
              type="radio"
              id="choice1"
              name="search"
              value="all"
              checked={this.state.selected === "all"}
              onChange={(e) => this.setState({selected: e.target.value})}
            />
            <label htmlFor="choice1">All</label> 
          </div>
          <div className="btn">
            <input
              type="radio"
              id="choice2"
              name="search"
              value="video"
              checked={this.state.selected === "video"}
              onChange={(e) => this.setState({selected: e.target.value})}
            />
            <label htmlFor="choice2">Video</label> 
          </div>
          <div className="btn">
            <input
              type="radio"
              id="choice3"
              name="search"
              value="photo"
              checked={this.state.selected === "photo"}
              onChange={(e) => this.setState({selected: e.target.value})}
            />
            <label htmlFor="choice3">Photo</label> 
          </div>
        </div>
       <form onSubmit={this.onFormSubmit} className="ui form">
          <input 
            type="text" 
            value={this.state.input}
            onChange={(e) => this.setState({input: e.target.value})}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;