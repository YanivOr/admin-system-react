import initialState from './initialState'
import {
  GRID_ROW_CLICKED
} from '../../../constants/gridEditor'
import {
  gridRowClicked
} from './main'

const gridEditor = (state = initialState, {type, entity}) => {
  switch (type) {
    case GRID_ROW_CLICKED: return gridRowClicked(state, entity)
    default:
      return state
  }
}

export default gridEditor