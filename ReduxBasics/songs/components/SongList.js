import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

  showList = () => {
    return this.props.songList.map((song, i) => {
      return (
        <div key={song.title+i}>
          <span style={{margin: '10px'}}>{song.title}</span>
          <button onClick={()=> this.props.selectSong(song)}>Select</button>
        </div>
      );
    });
  };

  render() {
    return(
      <div>
        {this.showList()}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return { songList: state.songList };
};

export default connect(mapStateToProps, {selectSong})(SongList);