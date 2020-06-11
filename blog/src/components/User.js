import React, { useState, useEffect } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import UserPostCard from './UserPostCard';

const User = (props) => {
  const { user } = props.location.state; 
  const { postDelete } = props;
  const [posts, setPosts] =  useState([]);

  const getPosts = async () => {
    const response = await jsonPlaceholder.get(`/posts`, {
      params: {
        user_id: user.id
      }
    });
    setPosts(response.data);
  }

  useEffect( () => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const renderUserPosts = posts.map((post) => <UserPostCard key={post.id} post={post} user={user} postDelete={postDelete}/>);
 
  return (
    <div className="ui container user">
      <h2 className="ui header">
        {user.name}
      </h2>
      <h3 className="ui right header">
        {user.email}
      </h3>
      <div className="ui two stackable cards">
        {renderUserPosts}
      </div>
    </div>
  );
};

export default User;