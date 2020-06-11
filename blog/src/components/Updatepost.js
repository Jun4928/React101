import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const Updatepost = (props) => {
  const { postUpdate } = props;
  const { post } = props.location.state;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const onFormSubmit = async () => {
    await postUpdate({ // return: new postId
      user_id: post.user_id,
      title,
      body
    }, post.id);
 
    props.history.push('/');
  }

  return(
    <div className="ui container">
        <div style={{margin: "10px"}}>
          <TextField 
            id="standard-basic" 
            label="글 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{margin: "10px"}}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            label="글 수정"
            variant="outlined"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div style={{margin: "10px"}}>
          <Button 
            variant="outlined" 
            color="primary"
            onClick={onFormSubmit}
          >수정하기</Button>
        </div>
    </div>
  );
}

export default Updatepost;
