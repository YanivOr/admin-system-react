import initialState from './initialState'
import {
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_STARTED,
  VERIFY_TOKEN_FAILURE,
} from '../../actions/router/constants'
import {
  verifyTokenSuccess,
  verifyTokenStarted,
  verifyTokenFailure,
} from './main'

const entity = (state = initialState, {type, payload}) => {
  switch (type) {
    case VERIFY_TOKEN_SUCCESS: return verifyTokenSuccess(state, payload)
    case VERIFY_TOKEN_STARTED: return verifyTokenStarted(state, payload)
    case VERIFY_TOKEN_FAILURE: return verifyTokenFailure(state, payload)
    default:
      return state
  }
}

export default entity