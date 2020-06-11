import React from 'react';
import { Link } from 'react-router-dom';
import AlertDialog from './AlertDialog';

const PostCard = (props) => {
  const { post } = props;
  const { user } = props;
  const { postDelete } = props;
   
  return(
    <div className="ui card">
      <Link className="content" 
        to={{
          pathname: `/posts/${post.id}`,
          state: {
            post: post,
            user: user
        }
      }}>
        <div style={{margin: '10px'}} className="header">{post.title}</div>
        <div style={{margin: '10px'}}className="description"> <p>{post.body}</p> </div> 
      </Link>
      <div className="extra content">
        <div className="right floated author" style={{color: 'black'}}>
          {user ? user.name : null}
        </div>
        <AlertDialog postDelete={postDelete} postId={post.id}/>
      </div>
    </div>
  )
};

export default PostCard;