// reducers
import { combineReducers } from 'redux'; 

const songListReducer = () => {
  return [
    {title: 'English', duration: '3:30'},
    {title: 'Math', duration: '2:30'},
    {title: 'German', duration: '10:20'},
    {title: 'Philosophy', duration: '2:29'}
  ];
};

const selectedSongReducer = (song = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload.song;
  }

  return song;
};

export default combineReducers({
  songList: songListReducer,
  selectedSong:  selectedSongReducer
});