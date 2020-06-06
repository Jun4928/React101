import React, { useState } from 'react';
import useResources from './useResources';

const UserList = () => {
  const [ userData, setUserData ] = useState([]);
  const loading = useResources('users', setUserData);

  const renderLoading = () => {
    if (loading) return <div>Loading...</div>
    if (!loading) return null
  }

  const renderData = userData.map((user) => <li key={user.id}>{user.name}</li>) 

  return(
    <div>
      UserList
      {renderLoading()}
      {renderData}
    </div>

  );
}

export default UserList;