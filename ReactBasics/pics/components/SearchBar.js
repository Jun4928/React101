import React from 'react';

class SearchBar extends React.Component {
  state = { textInput: ''}

  onFormSubmit(event) {
    event.preventDefault(); // 새로운 웹페이지 요청을 막고
    this.props.onEnter(this.state.textInput); // 부모 컴포넌트인 App 에게 값을 전달한다.
    // this.props.onEnter 함수는 App 에서 <SearchBar onEnter={this.onUserEnter}/> 함수를 전달받은 것
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ (e) => this.onFormSubmit(e) }>
          <div className="field">
            <label>Search your Image</label> 
            <input 
              type="text"
              value={this.state.textInput}
              onChange={ (e) => this.setState({ textInput: e.target.value }) }
            />
          </div>
        </form>
      </div>
    );
  }
} 

export default SearchBar;
