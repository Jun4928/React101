import React from 'react';
import useFetch from './useFetch';
import PostCard from './PostCard';
import Spinner from './Spinner';

const Home = (props) => {
  const {posts, setPosts, postLoaded, setPostLoaded, users, postDelete} = props;
  const loading = useFetch('/posts', setPosts, postLoaded, setPostLoaded); 

  const renderLoading = () => {
    if (loading || users.length === 0) return <Spinner />;
    if (!loading && users.length !== 0) return null;
  };

  const renderPosts = posts.map( (post) => {
    return <PostCard key={post.id} {...props} post={post} users={users} postDelete={postDelete}/>
  });

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      {renderLoading()}
      <div className="ui two stackable cards">
        {renderPosts}
      </div>
    </div>
  );

};

export default Home;