import React from 'react';
import useFetch from './useFetch';
import PostCard from './PostCard';
import Spinner from './Spinner';

const Home = (props) => {
  const {posts, setPosts, postLoaded, setPostLoaded, users, postDelete, userLogedIn, userInfo} = props;
  const loading = useFetch('/posts', setPosts, postLoaded, setPostLoaded); 

  const renderLoading = () => {
    if (loading || users.length === 0) return <Spinner />;
    if (!loading && users.length !== 0) return null;
  };

  const renderUserInfo = () => {
    if (userLogedIn && userInfo) {
      return <div>Hello {userInfo.properties.nickname}</div>
    }

    if (!userLogedIn) {
      return <div>Please Log In</div>
    }
  } 
  const renderPosts = posts.map( (post) => {
    return <PostCard key={post.id} {...props} post={post} users={users} postDelete={postDelete}/>
  });

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      {renderLoading()}
      <h2>
        {renderUserInfo()}
      </h2>
      <div className="ui two stackable cards">
        {renderPosts}
      </div>
    </div>
  );

};

export default Home;