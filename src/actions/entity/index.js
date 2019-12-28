import axios from 'axios'
import { 
  GET_ITEMS_SUCCESS, 
  GET_ITEMS_STARTED, 
  GET_ITEMS_FAILURE,
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
} from './constants'
import { api} from '../../config'
import { authHeader } from '../../services/auth'

export const getItems = (entity) => {
  return dispatch => {
    dispatch(getItemsStarted(entity))

    axios
      .get(api[entity],
          { headers: { Authorization: authHeader() } })
      .then(({data}) => {
        dispatch(getItemsSuccess(entity, data))
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

export const changePage = (entity, action) => {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      entity,
      payload: {
        action
      }
    })
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
  }
}