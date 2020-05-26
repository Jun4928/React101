import React from 'react';

class SearchBar extends React.Component {

  state = {input: ''}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onImageSearch(this.state.input);
  }

  render() {
    return(
      <div className="ui segment" style={{marginTop: '10px'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}> 
          <label style={{fontWeight: 'bold'}}>Search your image</label>
          <input 
            type="text"
            style={{marginTop: '10px'}}
            value={this.state.input}
            onChange={(e) => this.setState({input: e.target.value})}
          />
        </form>
      </div>
    );
  }

}

export default SearchBar;