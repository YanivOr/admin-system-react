import  {
  GRID_ROW_CLICKED,
} from './types'

export const gridRowClickedCreator = (entity) => ({
  type: GRID_ROW_CLICKED,
  entity,
  payload: {

  }
})
