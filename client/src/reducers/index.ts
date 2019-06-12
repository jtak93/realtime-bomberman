import { combineReducers } from 'redux';
import grid from './grid';
import players from './player';
import bombs from './bomb'

export default combineReducers({
    grid,
    players,
    bombs,
})