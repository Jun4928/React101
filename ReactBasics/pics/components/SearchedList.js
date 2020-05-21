import React from 'react';

const SearchedList = (props) => {
  const {word} = props;

  return(
    <div className="item" style= { { marginLeft: '10px' } } >
      {word}
    </div>
  );
}

export default SearchedList; 