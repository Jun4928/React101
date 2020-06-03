import React from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/'; 

class SearchBar extends React.Component {

  state = { keyword: '' };
  
  onSearch = (event) => {
    event.preventDefault();
    this.props.fetchImages(this.state.keyword);
  }

  render() {
    return(
      <div className="ui segment">
        <form onSubmit={this.onSearch} className="ui form">
          <div className="field">
            <label>Seach Images</label>
            <input 
              type="text"
              value={this.state.keyword}
              onChange={(e) => this.setState({ keyword: e.target.value })}
            /> 
          </div>
        </form>
      </div>
    );
  }

}

export default connect(null, { fetchImages })(SearchBar);