import { 
  GET_ITEMS_SUCCEEDED, 
  GET_ITEMS_STARTED, 
  GET_ITEMS_FAILED,
  SAVE_ITEM_SUCCEEDED,
  SAVE_ITEM_STARTED,
  SAVE_ITEM_FAILED,
  GET_PROCESSED_ITEMS,
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
  ROW_CLICKED,
  FIELD_CHANGED,
  RESET_FORM,
  CLEAR_FORM,
} from '../../../constants/entities'
import { apiRequest } from '../../../services/api'

export const getItems = (entity) => {
  return async dispatch => {
    dispatch(getItemsStarted(entity))

    try {
      const data = await apiRequest(entity)
      dispatch(getItemsSucceeded(entity, data))
      dispatch(getProcessedItems(entity))
    }
    catch (message) {
      dispatch(getItemsFailed(entity, message))
    }
  }
}

export const saveItem = (entity) => {
  return async (dispatch, getState) => {
    dispatch(saveItemStarted(entity))

    try {
      const { selectedRow } = getState().entities[entity].form
      const data = await apiRequest(entity, selectedRow)
      dispatch(saveItemSucceeded(entity, data))
    }
    catch (message) {
      dispatch(saveItemFailed(entity, message))
    }
  }
}

export const changePage = (entity, action) => {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      entity,
      payload: {
        action
      }
    })
    dispatch(getProcessedItems(entity))
  }
}

export const sortTable = (entity, field) => {
  return dispatch => {
    dispatch({
      type: SORT_TABLE,
      entity,
      payload: {
        field
      }
    })
    dispatch(getProcessedItems(entity))
  }
}

export const searchTable = (entity, q) => {
  return dispatch => {
    dispatch({
      type: SEARCH_TABLE,
      entity,
      payload: {
        q
      }
    })
    dispatch(getProcessedItems(entity))
  }
}

export const rowClicked = (entity, rowId) => {
  return dispatch => {
    dispatch({
      type: ROW_CLICKED,
      entity,
      payload: {
        rowId
      }
    })
  }
}

export const fieldChanged = (entity, {field, value}) => {
  return dispatch => {
    dispatch({
      type: FIELD_CHANGED,
      entity,
      payload: {
        field,
        value,
      }
    })
  }
}

export const resetForm = (entity) => {
  return dispatch => {
    dispatch({
      type: RESET_FORM,
      entity,
      payload: {}
    })
  }
}

export const clearForm = (entity) => {
  return dispatch => {
    dispatch({
      type: CLEAR_FORM,
      entity,
      payload: {}
    })
  }
}

const getItemsSucceeded = (entity ,data) => ({
  type: GET_ITEMS_SUCCEEDED,
  entity,
  payload: {
    ...data
  }
})

const getItemsStarted = (entity) => ({
  type: GET_ITEMS_STARTED,
  entity
})

const getItemsFailed = (entity, error) => ({
  type: GET_ITEMS_FAILED,
  entity,
  payload: {
    error
  }
})

const getProcessedItems = (entity) => ({
  type: GET_PROCESSED_ITEMS,
  entity,
  payload: {} 
})

const saveItemSucceeded = (entity ,data) => ({
  type: SAVE_ITEM_SUCCEEDED,
  entity,
  payload: {
    ...data
  }
})

const saveItemStarted = (entity) => ({
  type: SAVE_ITEM_STARTED,
  entity
})

const saveItemFailed = (entity, error) => ({
  type: SAVE_ITEM_FAILED,
  entity,
  payload: {
    error
  }
})
