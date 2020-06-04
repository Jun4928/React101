import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import usersReducer from './usersReducer';
import selectedUserReducer from './selectedUserReducer';

export default combineReducers({
  images: imagesReducer,
  users: usersReducer,
  selectedUser: selectedUserReducer,
});