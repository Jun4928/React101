import React from 'react';
import './SeasonDisplay.css';

const seasonOption = {
  winter: {
    text: 'IT IS FREAKING COLD',
    iconName: 'snowflake'
  },
  summer: {
    text: `HEY LET'S GET TO THE COMO LAKE TOGETHER`,
    iconName: 'sun'
  }
}

const getSeason = (lat, month) => {
  if(2 < month && month < 10) return lat > 0 ? 'summer' : 'winter';
  else return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  const { position } = props;
  console.log(position.latitude);
  const season = getSeason(position.latitude, new Date().getMonth());
  const { text, iconName } = seasonOption[season];

  return(
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1 className="season-text">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
}

export default SeasonDisplay;