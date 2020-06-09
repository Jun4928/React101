import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="ui top inverted menu" style={{marginBottom: '10px'}}>
      <div className="item">
        <Link className="item" to="/">Home</Link>
      </div>
        <Link className="item" to="/">Posts</Link>
        <Link className="item" to="/users">Users</Link>
   </div>
  );

}

export default withRouter(Navbar);