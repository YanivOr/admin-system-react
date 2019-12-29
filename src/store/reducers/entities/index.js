import initialState from './initialState'
import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_STARTED,
  GET_ITEMS_FAILURE,
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
  ROW_CLICKED,
  FIELD_CHANGED,
} from '../../actions/entities/constants'
import {
  getItemsSuccess, 
  getItemsStarted, 
  getItemsFailure, 
  changePage, 
  sortData,
  searchData,
  populateForm,
  updateField,
} from './main'

const entities = (state = initialState, {type, entity, payload}) => {
  switch (type) {
    case GET_ITEMS_SUCCESS: return getItemsSuccess(state, entity, payload)
    case GET_ITEMS_STARTED: return getItemsStarted(state)
    case GET_ITEMS_FAILURE: return getItemsFailure(state)
    case CHANGE_PAGE: return changePage(state, entity, payload)
    case SORT_TABLE: return sortData(state, entity, payload)
    case SEARCH_TABLE: return searchData(state, entity, payload)
    case ROW_CLICKED: return populateForm(state, entity, payload)
    case FIELD_CHANGED: return updateField(state, entity, payload)
    default:
      return state
  }
}

export default entities