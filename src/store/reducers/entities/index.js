import initialState from './initialState/index'
import {
  GET_ITEMS_SUCCEEDED,
  GET_ITEMS_STARTED,
  GET_ITEMS_FAILED,
  GET_PROCESSED_ITEMS,
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
  ROW_CLICKED,
} from '../../actions/entities/table/types'
import {
  SAVE_ITEM_SUCCEEDED,
  SAVE_ITEM_STARTED,
  SAVE_ITEM_FAILED,
  FIELD_CHANGED,
  RESET_FORM,
  CLEAR_FORM,
} from '../../actions/entities/form/types'
import {
  GRID_ROW_CLICKED,
} from '../../actions/entities/gridEditor/types'
import {
  getItemsSucceeded, 
  getItemsStarted, 
  getItemsFailed,
  getProcessedItems,
  changePage, 
  sortData,
  searchData,
} from './main/table'
import {
  saveItemSucceeded,
  saveItemStarted,
  saveItemFailed,
  populateForm,
  updateField,
  resetRowId,
  clearRowId,
} from './main/form'
import {
  gridRowClicked,
} from './main/gridEditor'

const entities = (state = initialState, {type, entity, payload}) => {
  switch (type) {

    // Table
    case GET_ITEMS_SUCCEEDED: return getItemsSucceeded(state, entity, payload)
    case GET_ITEMS_STARTED: return getItemsStarted(state, entity)
    case GET_ITEMS_FAILED: return getItemsFailed(state, entity)
    case GET_PROCESSED_ITEMS: return getProcessedItems(state, entity)
    case CHANGE_PAGE: return changePage(state, entity, payload)
    case SORT_TABLE: return sortData(state, entity, payload)
    case SEARCH_TABLE: return searchData(state, entity, payload)

    // Form
    case SAVE_ITEM_SUCCEEDED: return saveItemSucceeded(state, entity, payload)
    case SAVE_ITEM_STARTED: return saveItemStarted(state, entity)
    case SAVE_ITEM_FAILED: return saveItemFailed(state, entity)
    case ROW_CLICKED: return populateForm(state, entity, payload)
    case FIELD_CHANGED: return updateField(state, entity, payload)
    case RESET_FORM: return resetRowId(state, entity, payload)
    case CLEAR_FORM: return clearRowId(state, entity, payload)

    // GridEditor
    case GRID_ROW_CLICKED: return gridRowClicked(state, entity, payload)
    
    default:
      return state
  }
}

export default entities