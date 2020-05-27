import React from 'react';

class SearchBar extends React.Component {
  state = {input: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchBarSubmit(this.state.input);
  }

  render() {
    return (
      <div className="ui segment" style={{marginTop: '10px'}}>
        <label style={{fontWeight: 'bold'}}>Search your vidoes</label>
        <form onSubmit={this.onFormSubmit} style={{marginTop: '10px'}}className="ui form">
          <input 
            type="text" 
            value={this.state.input}
            onChange={(e) => this.setState({input: e.target.value})}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;