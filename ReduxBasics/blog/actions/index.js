// action creators, async
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  getState().posts.map((post) => post.userId)
    .filter((id, index, arr) => arr.indexOf(id) === index)
    .forEach((id) => dispatch(fetchUsers(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUsers = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USERS', payload: response.data });
};