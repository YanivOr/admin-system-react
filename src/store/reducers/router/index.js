import initialState from './initialState'
import {
  VERIFY_TOKEN_SUCCEEDED,
  VERIFY_TOKEN_STARTED,
  VERIFY_TOKEN_FAILED,
} from '../../../constants/router'
import {
  verifyTokenSucceeded,
  verifyTokenStarted,
  verifyTokenFailed,
} from './main'

const entity = (state = initialState, {type, payload}) => {
  switch (type) {
    case VERIFY_TOKEN_SUCCEEDED: return verifyTokenSucceeded(state, payload)
    case VERIFY_TOKEN_STARTED: return verifyTokenStarted(state, payload)
    case VERIFY_TOKEN_FAILED: return verifyTokenFailed(state, payload)
    default:
      return state
  }
}

export default entity