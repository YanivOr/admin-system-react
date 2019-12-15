import { combineReducers } from 'redux';
import todos from './todos';
import routes from './routes';

export default combineReducers({
  todos,
  routes,
});
