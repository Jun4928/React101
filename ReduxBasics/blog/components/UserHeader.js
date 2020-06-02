import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if(!user) return (
      <div>
        Loading...
      </div>
    );

    return (
      <div>
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId)};
};

// props 로 action creator를 받는다.
export default connect(mapStateToProps)(UserHeader);