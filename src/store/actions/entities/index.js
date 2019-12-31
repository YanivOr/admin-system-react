import axios from 'axios'
import { 
  GET_ITEMS_SUCCESS, 
  GET_ITEMS_STARTED, 
  GET_ITEMS_FAILURE,
  GET_PROCESSED_ITEMS,
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
  ROW_CLICKED,
  FIELD_CHANGED,
} from './constants'
import { api } from '../../../config'
import { authHeader } from '../../../services/auth'

export const getItems = (entity) => {
  return dispatch => {
    dispatch(getItemsStarted(entity))

    axios
      .get(api[entity],
          { headers: { Authorization: authHeader() } })
      .then(({data}) => {
        dispatch(getItemsSuccess(entity, data))
        dispatch(getProcessedItems(entity))
      })
      .catch(({message}) => {
        dispatch(getItemsFailure(entity, message))
      })
  }
}

const getItemsSuccess = (entity ,data) => ({
  type: GET_ITEMS_SUCCESS,
  entity,
  payload: {
    ...data
  }
})

const getItemsStarted = (entity) => ({
  type: GET_ITEMS_STARTED,
  entity
})

const getItemsFailure = (entity, error) => ({
  type: GET_ITEMS_FAILURE,
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
