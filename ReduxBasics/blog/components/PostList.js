import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsandUsers } from '../actions/index';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsandUsers();

  }  

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateTopProps, { fetchPostsandUsers })(PostList);