import { combineReducers } from 'redux';
import grid from './grid';
import players from './player';

export default combineReducers({
    grid,
    players
})