import {
  CHANGE_PAGE,
  SORT_TABLE,
  SEARCH_TABLE,
  ROW_CLICKED,
  GET_ITEMS_STARTED,
  GET_ITEMS_SUCCEEDED,
  GET_ITEMS_FAILED,
  GET_PROCESSED_ITEMS,
} from './types'

export const changePageCreator = (entity, action) => ({
  type: CHANGE_PAGE,
  entity,
  payload: {
    action
  }
})

export const sortTableCreator = (entity, field) => ({
  type: SORT_TABLE,
  entity,
  payload: {
    field
  }
})

export const searchTableCreator = (entity, q) => ({
  type: SEARCH_TABLE,
  entity,
  payload: {
    q
  }
})

export const rowClickedCreator = (entity, rowId) => ({
  type: ROW_CLICKED,
  entity,
  payload: {
    rowId
  }
})

export const getItemsStartedCreator = (entity) => ({
  type: GET_ITEMS_STARTED,
  entity
})

export const getItemsSucceededCreator = (entity ,data) => ({
  type: GET_ITEMS_SUCCEEDED,
  entity,
  payload: {
    ...data
  }
})

export const getItemsFailedCreator = (entity, error) => ({
  type: GET_ITEMS_FAILED,
  entity,
  payload: {
    error
  }
})

export const getProcessedItemsCreator = (entity) => ({
  type: GET_PROCESSED_ITEMS,
  entity,
  payload: {} 
})
