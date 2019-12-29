import initialState from './initialState'
import {
  VERIFY_TOKEN_SUCCESS,
} from '../../actions/router/constants'
import {
  setRouteState,
} from './main'

const entity = (state = initialState, {type, payload}) => {
  switch (type) {
    case VERIFY_TOKEN_SUCCESS: return setRouteState(state, payload)
    default:
      return state
  }
}

export default entity