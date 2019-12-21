import { combineReducers } from 'redux';
import accounts from './accounts';
import posts from './posts';

export default combineReducers({
  accounts,
  posts,
});
