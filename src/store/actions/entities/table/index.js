import  {
  changePageCreator,
  sortTableCreator,
  searchTableCreator,
  rowClickedCreator,
  getItemsStartedCreator,
  getItemsSucceededCreator,
  getItemsFailedCreator,
  getProcessedItemsCreator,
} from './creators'
import { apiRequest } from '../../../../services/api/entities'

export const getItems = (entity) => async dispatch => {
  dispatch(getItemsStartedCreator(entity))

  try {
    const data = await apiRequest(entity)
    dispatch(getItemsSucceededCreator(entity, data))
    dispatch(getProcessedItemsCreator(entity))
  }
  catch (message) {
    dispatch(getItemsFailedCreator(entity, message))
  }
}

export const changePage = (entity, action) => dispatch => {
  dispatch(changePageCreator(entity, action))
  dispatch(getProcessedItemsCreator(entity))
}

export const sortTable = (entity, field) => dispatch => {
  dispatch(sortTableCreator(entity, field))
  dispatch(getProcessedItemsCreator(entity))
}

export const searchTable = (entity, q) => dispatch => {
  dispatch(searchTableCreator(entity, q))
  dispatch(getProcessedItemsCreator(entity))
}

export const rowClicked = (entity, rowId) => dispatch => {
  dispatch(rowClickedCreator(entity, rowId))
}
