import React from 'react';

class SearchBar extends React.Component {
  state = {input: ''}

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchBarSubmit(this.state.input);
  }
  
  render() {
    return (
      <div className="ui segment" style={{margin: '10px'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}> 
          <div className="field">
            <label>Search your fascinating images..</label>
            <div className="ui input">
              <input 
                type="text"
                value={this.state.input}
                onChange={ (e) => this.setState({ input: e.target.value }) }
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;