import jsonPlaceholder from '../apis/jsonPlaceholder';

export const kakaoLogin = (user) => {
  return {
    type: 'USER_LOGIN',
    payload: user,
  }
};

export const kakaoLogout = () => {
  return {
    type: 'USER_LOGOUT',
    payload: null,
  }
}

export const fetchTodos = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({type: 'FETCH_TODOS', payload: response.data})
}