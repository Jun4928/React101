import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
  // props.match.params.postId: Link 태그에서 넘겨준 to: pathname: 을 받을 수 있음 (실제 url 상에 나타난다.)
  // props.location.state. 를 통해서 Link 태그에서 넘겨준 state 참조 가능
  
  console.log(props);
  const { post } = props.location.state;
  const { user } = props.location.state;

  return(
    <div className="ui container post">
      <h2 className="ui header">
        {post.title}
      </h2>
      <h3 className="ui right floated header">
        {user.name}
      </h3>
      <p>
        {post.body}
      </p>
        <div style={{margin: "10px"}}>
          <Link
            to={{
              pathname: '/updatepost',
              state: {
                post: post,
                user: user
              }
            }}
          >
            <Button 
              variant="outlined" 
              color="primary"
            >
            수정하기
            </Button>
          </Link>
        </div>
    </div>
  )
}

export default Post;