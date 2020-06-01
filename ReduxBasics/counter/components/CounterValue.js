import React from 'react';
import { connect } from 'react-redux';

const CounterValue = (props) => {
  return (
    <div>
      Counting: {props.counter}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

// redux store 에서 state 를 props로 가져오기 위해서,, connect 함수를 사용한다.
export default connect(mapStateToProps)(CounterValue);
