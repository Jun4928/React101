import React from 'react';

const History = (props) => {
  const {history} = props;
  
  const showHistory = () => {
    return history.map((input, i) => {
      return <div key={i+input} style={{margin: '5px'}}>{input}</div>
    });
  }

  return (
    <div className="ui segment">
      <label style={{marginTop: '10px', fontWeight: 'bold'}}>History</label>
      {showHistory()}
    </div>
  );

}

export default History;
