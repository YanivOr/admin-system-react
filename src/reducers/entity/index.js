import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_STARTED,
  GET_ITEMS_FAILURE,
  CHANGE_PAGE,
  SORT_TABLE,
} from '../../actions/entity/constants'
import initialState from './initialState'
import { getItemsSuccess, getItemsStarted, getItemsFailure, changePage, sortTable } from './helpers'

const entity = (state = initialState, {type, entity, payload}) => {
  switch (type) {
    case GET_ITEMS_SUCCESS: return getItemsSuccess(state, entity, payload)
    case GET_ITEMS_STARTED: return getItemsStarted(state)
    case GET_ITEMS_FAILURE: return getItemsFailure(state)
    case CHANGE_PAGE: return changePage(state, entity, payload)
    case SORT_TABLE: return sortTable(state, entity, payload)
    default:
      return state
  }
}

export default entity