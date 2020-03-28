import  {
  GRID_ROW_CLICKED,
  HIDE_TOOLBAR,
  TOOLBAR_EDIT,
  TOOLBAR_IMAGE,
  TOOLBAR_VIDEO,
  EDIT_FORM_CHANGED,
  EDIT_FORM_SUBMITTED,
  EDIT_FORM_CANCELED,
} from './types'

export const gridRowClickedCreator = (entity, index, clientRect) => ({
  type: GRID_ROW_CLICKED,
  entity,
  payload: {
    index,
    clientRect
  }
})

export const hideToolbarCreator = (entity) => ({
  type: HIDE_TOOLBAR,
  entity,
  payload: {}
})

export const toolbarTextCreator = (entity) => ({
  type: TOOLBAR_EDIT,
  entity,
  payload: {}
})

export const toolbarImageCreator = (entity) => ({
  type: TOOLBAR_IMAGE,
  entity,
  payload: {}
})

export const toolbarVideoCreator = (entity) => ({
  type: TOOLBAR_VIDEO,
  entity,
  payload: {}
})

export const editFormChangedCreator = (entity, content) => ({
  type: EDIT_FORM_CHANGED,
  entity,
  payload: {
    content,
  }
})

export const editFormSubmittedCreator = (entity) => ({
  type: EDIT_FORM_SUBMITTED,
  entity,
  payload: {}
})

export const editFormCanceledCreator = (entity) => ({
  type: EDIT_FORM_CANCELED,
  entity,
  payload: {}
})
