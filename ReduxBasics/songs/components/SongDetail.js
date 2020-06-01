import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  const { song } = props;

  if(!song) {
    return <div><h3>Select your Song</h3></div>;
  }

  return (
    <div>
      <h3>Song Detail</h3>
      <div>
        Title: {song.title}
      </div>
      <div>
        Duration: {song.duration}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }; 
};


export default connect(mapStateToProps)(SongDetail);
