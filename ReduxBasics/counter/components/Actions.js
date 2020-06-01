import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
 
const Actions = (props) => {
  return (
    <div>
      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

// state, action creators 와 연결을 시켜준다.
export default connect(mapStateToProps, { increment, decrement })(Actions);
