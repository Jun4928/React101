import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = {lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if(!this.state.lat && !this.state.errorMessage) return <Spinner />;
    return this.state.lat ? <SeasonDisplay lat={this.state.lat} /> : <Spinner message="Please allow location"/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)