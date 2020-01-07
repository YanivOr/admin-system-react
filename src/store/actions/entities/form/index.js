import {
  fieldChangedCreator,
  resetFormCreator,
  clearFormCreator,
  saveItemStartedCreator,
  saveItemSucceededCreator,
  saveItemFailedCreator,
} from './creators'
import { getProcessedItemsCreator } from '../table/creators'
import { apiRequest } from '../../../../services/api/entities'

export const fieldChanged = (entity, data) => dispatch => {
  dispatch(fieldChangedCreator(entity, data))
}

export const resetForm = (entity) => dispatch => {
  dispatch(resetFormCreator(entity))
}

export const clearForm = (entity) => dispatch => {
  dispatch(clearFormCreator(entity))
}

export const saveItem = (entity) => async (dispatch, getState) => {
  dispatch(saveItemStartedCreator(entity))

  try {
    const { selectedRow } = getState().entities[entity].form
    const data = await apiRequest(entity, selectedRow)
    dispatch(saveItemSucceededCreator(entity, data))
    dispatch(getProcessedItemsCreator(entity))
  }
  catch (message) {
    dispatch(saveItemFailedCreator(entity, message))
  }
}
