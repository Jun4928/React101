import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import jsonPlaceholder from '../apis/jsonPlaceholder';

import Navbar from './Navbar';
import Home from './Home';
import Users from './Users';
import Post from './Post';
import User from './User';
import Newpost from './Newpost';
import Updatepost from './Updatepost';
import LogIn from './LogIn';

const App = () => {
  const [posts, setPosts] = useState([]); 
  const [postLoaded, setPostLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const Kakao = window.Kakao;

  const postDelete = async (postId) => {
    console.log('postDelete triggered');
    await jsonPlaceholder.delete(`/posts/${postId}`);
    console.log('Delete postId from the state');
    let deletedUserId;
    setPosts(posts.filter((post) => {
      if (post.id === postId) {
        deletedUserId = post.user_id;
        return false;
      }
      return true;
    }));

    const response = await jsonPlaceholder.get(`/posts`,{
      params: {
        user_id: deletedUserId
      }
    });

    if (response.data.length === 0) setUsers(users.filter((user) => user.id !== deletedUserId))
  };

  const postNewPost = async (newPost) => {
    console.log('new post trigerred');
    const response = await jsonPlaceholder.post(`/posts`, newPost);
    setPosts([{...newPost, id: response.data}, ...posts]);

    const userInfo = await jsonPlaceholder.get(`/users/${newPost.user_id}`);
    if (!users.find((user) => user.id === userInfo.data.id)) setUsers([...users, userInfo.data]);
  };

  const postUpdate = async (updatedPost, postId) => {
    console.log('post update');
    await jsonPlaceholder.put(`/posts/${postId}`, updatedPost );
    setPosts(posts.map((post) => {
      if (post.id === postId) return { ...post, ...updatedPost }; // 원래부분 앞에 두고,, 뒤에 수정된 부분이 override 함. object 수정
      return post;
    }));
    
  }

  useEffect(() => {
    Kakao.init('YOUR KEY');
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            setUserInfo(res);
          },
          fail: (error) => {
            alert('login success, but failed to request user information: ' + JSON.stringify(error));
          },
      });

      setUserLogedIn(true);
    }

    if (!Kakao.Auth.getAccessToken()) {
      setUserLogedIn(false);
    }
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
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
      const uniqueIds = posts.map((post) => post.user_id) // 중복되는 id 를 제거해준다.
                             .filter((id, index, arr) => arr.indexOf(id) === index)
      userFetch(uniqueIds);
    }
    // eslint-disable-next-line
  }, [postLoaded]); 

  // React-Route 를 사용해서 컴포넌트에게 props를 전달할 때에는 render={(props) => <Child {...props} pass={pass} />} 와 같이 함수로 전달.
  return(
    <BrowserRouter>
      <div className="app">
        <Navbar 
          userLogedIn={userLogedIn} 
          setUserLogedIn={setUserLogedIn} 
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
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
              userLogedIn={userLogedIn}
              userInfo={userInfo}
            />} 
          />
          <Route path="/users" exact render={(props) => <Users {...props} users={users} />} />
          <Route path="/newpost" exact render={(props) => <Newpost {...props} postNewPost={postNewPost}/>} />
          <Route path="/updatepost" exact render={(props) => <Updatepost {...props} postUpdate={postUpdate}/>} />
          <Route path="/login" exact render={(props) => <LogIn {...props} /> } />
          <Route path="/posts/:postId" 
            render={(props) => 
            <Post {...props}  
              posts={posts} 
              setPosts={setPosts}
              postLoaded={postLoaded}
              setPostLoaded={setPostLoaded}
            />} 
          />
          <Route path="/users/:userId" render={(props) => <User {...props} postDelete={postDelete}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;
