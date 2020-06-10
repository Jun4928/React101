import React from 'react';
import UserCard from './UserCard';

const Users = (props) => {
  const { users } = props;

  const renderUsers = users.map((user) => {
    return <UserCard key={user.id} user={user}/>
  });

  return(
    <div className="ui container">
      <div className="ui two stackable cards">
        {renderUsers}
      </div>
    </div>
  );
};

export default Users;