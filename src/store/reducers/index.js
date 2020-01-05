import { combineReducers } from 'redux'
import router from './router'
import entities from './entities'
import gridEditor from './gridEditor'

export default combineReducers({
  router,
  entities,
  gridEditor,
})
