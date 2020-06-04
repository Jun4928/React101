import React from 'react';
import { connect } from 'react-redux';


const UserDeatil = (props) => {
  const { user } = props;

  if(!user) return <div>Loading...</div>

  console.log(user);
  return (
    <div>
      {user}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.selectedUser };
}

export default connect(mapStateToProps)(UserDeatil);