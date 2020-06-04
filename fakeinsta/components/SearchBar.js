import React from 'react';
import { connect } from 'react-redux';
import { fetchImagesAndUsers } from '../actions/'; 
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {

  state = { keyword: '' };
  
  onSearch = (event) => {
    event.preventDefault();
    this.props.fetchImagesAndUsers(this.state.keyword);
    this.props.history.push('/');
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

export default connect(null, { fetchImagesAndUsers })(withRouter(SearchBar));