import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [ resource, setResource] = useState(null);

  const renderResourceList = () => {
    if(resource) return <ResourceList resource={resource}/>
    if(!resource) return <div>Please Select your resource</div> 
  };

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos') }>Todos</button>
      </div>
      {renderResourceList()}
    </div>
  );
};


export default App; 