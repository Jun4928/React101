import { combineReducers } from 'redux';
import userReducer from './userReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  user: userReducer,
  todos: todosReducer,
});