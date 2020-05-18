import React from 'react'; 
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => { // callback
        this.setState({ lat: position.coords.latitude }); // setState
      },
      (err) => { // if error occurs, setState so that it can rerender the page
        this.setState({ errorMessage: err.message}); 
      }
    );
  }

  getLatitude() {
    if(!this.state.lat && !this.state.errorMessage) return 'Latitude: loading';
    return this.state.lat ? `Latitude: ${this.state.lat}` : `Error: ${this.state.errorMessage}`;
  }

  // React says we have to define render
  render() {
    return ( 
      <div> 
        <h3>{this.getLatitude()}</h3>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
