import { combineReducers } from 'redux';

// action 에 따라서, 같은 값에 다른 영향을 준다.
const counterReducer = (value = 0, action) => {
  if (action.type === 'INCREMENT') return value + 1;
  if (action.type === 'DECREMENT') return value - 1;
  return value;
};

export default combineReducers({
  counter: counterReducer
});
