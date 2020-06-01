import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import App from './components/App';
import reducers from './reducers';


// Provider React-Redux 로 전체 App Component 를 감싼다. 
// store에 createStore(reducers) 로.. Redux Store 와  연결시켜준다.
ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>,
  document.querySelector('#root')
);
