import React from 'react';

class SearchBar extends React.Component {
  state = {input: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchBarSubmit(this.state.input); // send state in this component to the parent component by using callback function
  }

  render() {
    return(
      <div className="ui segment">
        <label style={{fontWeight: "bold"}}>Search your image</label>
        <form onSubmit={this.onFormSubmit} style={{marginTop: "10px"}} className="ui form">
          <input 
            type="text"
            value={this.state.input}
            onChange={ (event) => this.setState({input: event.target.value}) }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;