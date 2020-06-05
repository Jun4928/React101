import React from 'react';
import { connect } from 'react-redux';
import { fetchImagesByUsername, makeImagesEmpty } from '../actions';
import UserImageList from './UserImageList';

class UserDeatil extends React.Component {

  componentDidMount() {
    this.props.fetchImagesByUsername(this.props.user.username);
  }

  componentWillMount() {
    this.props.makeImagesEmpty();
  }

  render() {
    const { user } = this.props;

    if(!user) return <div>Loading...</div>

    return (
      <div>
      <div className="ui raised segment">
        <div className="ui grid">
          <div className="four wide column">
            <img alt={user.username} className="ui small circular image" src={user.profileImageURL} />
          </div>
          <div className="twelve wide column">
            <h3>{user.username}</h3>
            <div>{user.location}</div>
            <div>Photos: {user.totalPhotos}</div>
            <div>Likes: {user.totalLikes}</div>
            <p style={{marginTop: '10px'}}>{user.bio}</p>     
          </div>
        </div>
      </div>
      <UserImageList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.users.find((user) => user.username === state.selectedUser), 
 };
}

export default connect(mapStateToProps, { fetchImagesByUsername, makeImagesEmpty })(UserDeatil);