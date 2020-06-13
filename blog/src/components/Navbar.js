import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import jsonPlaceholder from '../apis/jsonPlaceholder';
// import jsonPlaceholder from '../apis/jsonPlaceholder';

const Navbar = (props) => {
  const { userLogedIn, setUserLogedIn, setUserInfo, userInfo } = props;
  const Kakao = window.Kakao;

  const onKakaoLogin = async () => {
    Kakao.Auth.login({
      success: (authObj) => { // login success callback
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
      },
      fail: (err) => {
        console.log(err);
      },
    }) 

    // const response = await jsonPlaceholder.get('/oauth', {
    //   params: {
    //     id: id
    //   }
    // });
    
    // console.log(response);
    
  };

  const onKakaoLogout = () => {
    Kakao.Auth.logout(() => {
      setUserLogedIn(false); // app loged in 상태관리
    })
  };

  const checkUser = async () => {
    const response = await jsonPlaceholder.get('/oauth', {
      params: {
        id: userInfo.id
      }
    });

    console.log(response.data);
  }

  useEffect( () => {
    if(userInfo) checkUser();
    console.log(userInfo);
  }, [userInfo]);

  const renderLogin = () => {
    if (!userLogedIn) {
      return(
      <div className="item" style={{cursor: "pointer"}} onClick={onKakaoLogin}>
        카카오로 로그인 하기
      </div> 
      );
    }

    if (userLogedIn) {
      return (
        <div className="item" style={{cursor: "pointer"}} onClick={onKakaoLogout}>
          Log Out
        </div>
      );
    }

  };

  return(
    <div className="ui top inverted menu" style={{marginBottom: '10px'}}>
      <div className="item">
        <Link className="item" to="/">Home</Link>
      </div>
        <Link className="item" to="/">Posts</Link>
        <Link className="item" to="/users">Users</Link>
        <Link className="item" to="/newpost">New Post</Link>
        {renderLogin()}
   </div>
  );

}

export default withRouter(Navbar);