import { combineReducers } from 'redux';
import router from './router';
import entities from './entities';

export default combineReducers({
  router,
  entities,
});
