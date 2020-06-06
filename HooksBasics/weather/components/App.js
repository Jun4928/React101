import React from 'react';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';
import useGelocation from './useGelocation';

const App = () => {
  const [position, message] = useGelocation();
  
  if (!position) return <Spinner message={message} />

  return (
    <div>
      <SeasonDisplay position={position} />
    </div>
  );
}

export default App;