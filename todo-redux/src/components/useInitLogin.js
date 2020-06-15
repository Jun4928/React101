import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin, kakaoLogout } from '../actions';

export default () => {
  const Kakao = window.Kakao;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => { // App 구동되고 initialized 되어야 함.
		// KAKAO API KEY
    Kakao.init('YOUR KEY');
    setLoading(true);

    if (Kakao.Auth.getAccessToken()) { // if user logged in
      Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          dispatch(kakaoLogin(res));
          setLoading(false);
        },
        fail: (error) => {
          alert('login success, but failed to request user information: ' + JSON.stringify(error));
        },
      });

    }

    if (!Kakao.Auth.getAccessToken()) { // not logged in
      dispatch(kakaoLogout());
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [])

  return loading;
}
