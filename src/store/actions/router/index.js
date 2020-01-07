import {
  INIT,
} from '../../../constants/router'
import {
  verifyTokenStarted,
  verifyTokenSucceeded,
  verifyTokenFailed,
} from './creators'
import { verifyToken } from '../../../services/api/token'
import { fetchToken } from '../../../services/auth'

export const handleAuth = ({ location }) => {
  return async dispatch => {
    const routeState = fetchToken(location)
    if (routeState === INIT) {
      dispatch(verifyTokenFailed('No token'))
      return
    }

    dispatch(verifyTokenStarted())

    try {
      await verifyToken()
      dispatch(verifyTokenSucceeded(routeState))
    }
    catch (message) {
      dispatch(verifyTokenFailed(message))
    }
  }
}

