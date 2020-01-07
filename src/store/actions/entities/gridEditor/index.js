import { 
  gridRowClickedCreator,
} from './creators'

export const gridRowClicked = (entity) => dispatch => {
  dispatch(gridRowClickedCreator(entity))
}
