import React from 'react';
import Actions from './Actions';
import CounterValue from './CounterValue';

const App = () => {
  return (
    <div>
      <h2>Counter App</h2>
      <Actions />
      <CounterValue />
    </div>
  );
};

export default App;
