import {
  FIELD_CHANGED,
  RESET_FORM,
  CLEAR_FORM,
  SAVE_ITEM_STARTED,
  SAVE_ITEM_SUCCEEDED,
  SAVE_ITEM_FAILED,
} from './types'

export const fieldChangedCreator = (entity, {field, value}) => ({
  type: FIELD_CHANGED,
  entity,
  payload: {
    field,
    value,
  }
})

export const resetFormCreator = (entity) => ({
  type: RESET_FORM,
  entity,
  payload: {}
})

export const clearFormCreator = (entity) => ({
  type: CLEAR_FORM,
  entity,
  payload: {}
})

export const saveItemStartedCreator = (entity) => ({
  type: SAVE_ITEM_STARTED,
  entity
})

export const saveItemSucceededCreator = (entity ,data) => ({
  type: SAVE_ITEM_SUCCEEDED,
  entity,
  payload: {
    row: {...data}
  }
})

export const saveItemFailedCreator = (entity, error) => ({
  type: SAVE_ITEM_FAILED,
  entity,
  payload: {
    error
  }
})
