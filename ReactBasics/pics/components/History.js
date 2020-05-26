import React from 'react';

const History = (props) => {
  const {history} = props;

  const showHistory = () => {
    return history.map((input, i) => {
      return ( <div key={i} style={{padding: '5px'}}>{input}</div> ) ;
    });
  }

  return(
    <div className="ui segment" style={{marginTop: '10px'}}>
      <label style={{marginTop: '10px', fontWeight: 'bold'}}>History</label>
      {showHistory()}
    </div>
  )
}

export default History;