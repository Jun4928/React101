import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const Newpost = (props) => {
  const { postNewPost } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onFormSubmit = async () => {
    await postNewPost({ // return: new postId
      user_id: Math.floor(Math.random() * 10) + 1,
      title,
      body
    });
 
    props.history.push('/');
  }

  return(
    <div className="ui container">
        <div style={{margin: "10px"}}>
          <TextField 
            id="standard-basic" 
            label="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{margin: "10px"}}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={10}
            label="글쓰기"
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
          >Save</Button>
        </div>
    </div>
  );
}

export default Newpost;
