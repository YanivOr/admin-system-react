import  {
  GRID_ROW_CLICKED,
  HIDE_TOOLBAR,
  TOOLBAR_EDIT,
  TOOLBAR_IMAGE,
  TOOLBAR_VIDEO,
} from './types'

export const gridRowClickedCreator = (entity, clientRect) => ({
  type: GRID_ROW_CLICKED,
  entity,
  payload: {
    clientRect
  }
})

export const hideToolbarCreator = (entity) => ({
  type: HIDE_TOOLBAR,
  entity,
  payload: {}
})

export const toolbarEditCreator = (entity) => ({
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
