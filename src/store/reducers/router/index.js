import initialState from './initialState'
import {
  SET_ROUTE_STATE,
} from '../../actions/router/constants'
import {
  setRouteState,
} from './main'

const entity = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ROUTE_STATE: return setRouteState(state, payload)
    default:
      return state
  }
}

export default entity