import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  const { user } = props;

  return (
    <Link className="ui link card"
      to={{
        pathname: `/users/${user.id}`,
        state: {
          user: user
        }
      }}
    >
      <div className="content">
        <div className="header">{user.name}</div>
      </div>
      <div className="extra content">
        <div>{user.company.name}</div>
      </div>
    </Link >
  );
};

export default UserCard;