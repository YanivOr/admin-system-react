import { 
  gridRowClickedCreator,
  hideToolbarCreator,
  toolbarEditCreator,
  toolbarImageCreator,
  toolbarVideoCreator,
} from './creators'

export const gridRowClicked = (entity, clientRect) => dispatch => {
  dispatch(gridRowClickedCreator(entity, clientRect))
}

export const hideToolbar = (entity) => dispatch => {
  dispatch(hideToolbarCreator(entity))
}


export const toolbarEdit = (entity) => dispatch => {
  dispatch(toolbarEditCreator(entity))
}

export const toolbarImage = (entity) => dispatch => {
  dispatch(toolbarImageCreator(entity))
}

export const toolbarVideo = (entity) => dispatch => {
  dispatch(toolbarVideoCreator(entity))
}
