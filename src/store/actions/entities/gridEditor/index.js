import { 
  gridRowClickedCreator,
  hideToolbarCreator,
  toolbarTextCreator,
  toolbarImageCreator,
  toolbarVideoCreator,
  editFormChangedCreator,
  editFormSubmittedCreator,
  editFormCanceledCreator,
} from './creators'

export const gridRowClicked = (entity, index, clientRect) => dispatch => {
  dispatch(gridRowClickedCreator(entity, index, clientRect))
}

export const hideToolbar = (entity) => dispatch => {
  dispatch(hideToolbarCreator(entity))
}


export const toolbarText = (entity) => dispatch => {
  dispatch(toolbarTextCreator(entity))
  dispatch(hideToolbarCreator(entity))
}

export const toolbarImage = (entity) => dispatch => {
  dispatch(toolbarImageCreator(entity))
}

export const toolbarVideo = (entity) => dispatch => {
  dispatch(toolbarVideoCreator(entity))
}

export const editFormChanged = (entity, content) => dispatch => {
  dispatch(editFormChangedCreator(entity, content))
}

export const editFormSubmitted = (entity) => dispatch => {
  dispatch(editFormSubmittedCreator(entity))
}

export const editFormCanceled = (entity) => dispatch => {
  dispatch(editFormCanceledCreator(entity))
}
