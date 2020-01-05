import { 
  GRID_ROW_CLICKED,
} from '../../../constants/gridEditor'

export const gridRowClicked = (entity) => dispatch => {
  dispatch({
    type: GRID_ROW_CLICKED,
    entity,
    payload: {

    }
  })
}
