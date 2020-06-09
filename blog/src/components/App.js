import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import jsonPlaceholder from '../apis/jsonPlaceholder';

import Navbar from './Navbar';
import Home from './Home';
import Users from './Users';
import Post from './Post';
import User from './User';

const App = () => {
  const [posts, setPosts] = useState([]); 
  const [postLoaded, setPostLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const postDelete = async (postId) => {
    console.log('postDelete triggered');
    // await jsonPlaceholder.delete(`/posts/${postId}`);
    console.log('Delete postId from the state');
    setPosts(posts.filter((post) => post.id !== postId));
  };

  useEffect( () => {
    const userFetch = async (uniqueIds) => {
      const userInfo = [];
      for (const id of uniqueIds) { // forEach 문은 await를 기다려 주지 않는다. 본래의 기본 for 문을 사용해야 함.
        // 이 비동기 처리는 users 의 수가 많아질 수록.. 성능저하를 일으킬 것이다.
        // 이 for문이 끝나야 setUsers로 user 상태의 정보를 저장하기 때문이다.
        // redux, redux-thunk 가 필요한 시점.
        const response = await jsonPlaceholder.get(`/users/${id}`);
        userInfo.push(response.data);
      }

      setUsers([...users, ...userInfo]);
    }

    if(postLoaded) { // 로드가 되었을 때에만..
      const uniqueIds = posts.map((post) => post.userId) // 중복되는 id 를 제거해준다.
                             .filter((id, index, arr) => arr.indexOf(id) === index)
      userFetch(uniqueIds);
    }
    // eslint-disable-next-line
  }, [postLoaded]); 

  // React-Route 를 사용해서 컴포넌트에게 props를 전달할 때에는 render={(props) => <Child {...props} pass={pass} />} 와 같이 함수로 전달.
  return(
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact 
            render={(props) => 
              <Home {...props} 
                posts={posts} 
                setPosts={setPosts}
                postLoaded={postLoaded}
                setPostLoaded={setPostLoaded}
                users = {users}
                postDelete = {postDelete}
              />} 
          />
          <Route path="/users" exact render={(props) => <Users {...props} users={users} />}/>
          <Route path="/posts/:postId" component={Post}/>
          <Route path="/users/:userId" component={User}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;