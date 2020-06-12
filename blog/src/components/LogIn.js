import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://danvelop.github.io/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const Kakao = window.Kakao;

  const onKakaoLogin = () => {
    if (Kakao.Auth.getAccessToken()) {
      alert('Already logged in');
      return;
    }

    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        Kakao.API.request({
          url: '/v2/user/me',
          success: function(res) {
            console.log(JSON.stringify(res));
          },
          fail: function(error) {
            alert(
              'login success, but failed to request user information: ' +
                JSON.stringify(error)
            )
          },
        })
      },
      fail: (err) => {
        console.log(err);
      },
    })
  };

  const onKakaoLogout = () => {

    if (!Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.')
      return
    }

    // Kakao.API.request({
    //     url: '/v1/user/unlink',
    //     success: function(res) {
    //       alert('success: ' + JSON.stringify(res))
    //     },
    //     fail: function(err) {
    //       alert('fail: ' + JSON.stringify(err))
    //     },
    // })

    Kakao.Auth.logout(() => {
      console.log(('logout ok access token -> ' + Kakao.Auth.getAccessToken()));
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{cursor: "pointer"}} className={classes.paper}>
        <div onClick={onKakaoLogin}>
          <img
            alt="kakao_login"
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"
          />
        </div>
        <button onClick={onKakaoLogout} >
          Kakao LogOut
        </button>
        <form className={classes.form} noValidate onSubmit={onFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}