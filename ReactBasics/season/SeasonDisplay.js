import './SeasonDisplay.css';
import React from 'react';

const seasonOption = {
  winter: {
    text: 'IT IS FREAKING COLLLLD!',
    iconName: 'snowflake'
  },
  summer: {
    text: 'LET US GET TO THE BEACH IN THE NORTHERN ITALY...',
    iconName: 'sun'
  }
}

const getSeason = function(latitude, month) {
  if(2 < month && month < 10) return latitude > 0 ? 'summer' : 'winter';
  else return latitude > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  const {lat} = props;
  const season = getSeason(lat, new Date().getMonth() );
  const {text, iconName} = seasonOption[season];
  console.log(iconName);

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1 className="season-text">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
}

export default SeasonDisplay;