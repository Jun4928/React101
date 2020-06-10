import React from 'react';

const User = (props) => {
  const { user } = props.location.state; 

  return (
    <div className="ui container user">
      <h2 className="ui header">
        {user.name}
      </h2>
      <h3 className="ui right floated header">
        {user.email}
      </h3>
      <p>
      </p>
    </div>
  );
};

export default User;