import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kakaoLogin, kakaoLogout } from '../actions';
import Spinner from './Spinner';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  kakaoButton: {

  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[400]),
    backgroundColor: yellow[400],
    '&:hover': {
      backgroundColor: yellow[600],
    },
  },
}))(Button);

const ButtonAppBar = () => {
  const classes = useStyles();
  const Kakao = window.Kakao;
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const username = user ? `${user.properties.nickname}'s` : 'YOUR';

  const onLoginClick = () => { // login-action
    setLoading(true); // login loading...
    Kakao.Auth.login({
      success: (authObj) => { // login success callback
        Kakao.API.request({
            url: '/v2/user/me',
            success: (res) => {
              dispatch(kakaoLogin(res)); // login succeed, user info dispatch
              setLoading(false);
            },
            fail: (error) => {
              alert('login success, but failed to request user information: ' + JSON.stringify(error));
            },
        });
      },
      fail: (err) => {
        console.log(err);
      },
    }) 
  }

  const onLogoutClick = () => {
    Kakao.Auth.logout(() => {
      dispatch(kakaoLogout()); // logout dispatch
    })
  }

  const renderLoginButton = () => {
    if (!user) return(
      <ColorButton variant="contained" color="primary" onClick={onLoginClick}>
        카카오계정으로 로그인
      </ColorButton>
    )

    if (user) return(
      <ColorButton variant="contained" color="primary" onClick={onLogoutClick}>
        로그아웃
      </ColorButton>
    )
  }

  const renderSpinner = () => {
    if (loading) return <Spinner />
    return null;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" className={classes.title}>
            {username} todo
          </Button>
          {renderLoginButton()}
        </Toolbar>
        {renderSpinner()}
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;