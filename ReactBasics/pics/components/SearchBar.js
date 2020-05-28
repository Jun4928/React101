import React from 'react';

class SearchBar extends React.Component {
  state = {input: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.input);  
  }

  render() {
    return (
      <div style={{marginTop: '10px'}} className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={{fontWeight: 'bold', marginBottom: '5px'}}>Image Search</div>
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
