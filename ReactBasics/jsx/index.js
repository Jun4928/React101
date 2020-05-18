// Imoprt the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function main() {
  // const buttonText = 'Click';
  // const buttonText = [3,3,3,'Hi'];
  const buttonText = {text: 'click'};
  const style = {backgroundColor: 'blue', color: 'white'};
  const labelText = 'Enter your name:';

  return (
    <div style={{border: '1px solid red'}}>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={style}>{buttonText.text}</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);