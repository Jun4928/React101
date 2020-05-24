import React from 'react';

const History = (props) => {
  const {history} = props;

  const makeList = () => {
    const elements = [];
    history.forEach((input, i) => {
      elements.push( <div key={i} style={{margin: '5px'}}>{input}</div> );
    });

    return elements;
  }

  return (
    <div className="ui segment" style={{margin: '10px'}}>
      <label style={{fontWeight: 'bold'}}>Search History</label>
        {makeList()}
    </div>
  );
}


export default History;