import {combineReducers} from 'redux';
import User from './User';
import Settings from './Settings';

const reducer = combineReducers({
  user: User,
  settings: Settings,
});

export default reducer;
