import axios from 'axios'
import {
  VERIFY_TOKEN_SUCCEEDED,
  VERIFY_TOKEN_STARTED,
  VERIFY_TOKEN_FAILED,
  INIT,
} from '../../../constants/router'
import { api } from '../../../config'
import { fetchToken, authHeader } from '../../../services/auth'

export const handleAuth = ({ location }) => {
  return dispatch => {
    const routeState = fetchToken(location)
    if (routeState === INIT) {
      dispatch(verifyTokenFailed('No token'))
      return
    }
    dispatch(verifyTokenStarted())

    axios
      .get(api.verifyToken,
          { headers: { Authorization: authHeader() } })
      .then(() => {
        dispatch(verifyTokenSucceeded(routeState))
      })
      .catch(({ message }) => {
        dispatch(verifyTokenFailed(message))
      })
  }
}

const verifyTokenSucceeded = (routeState) => ({
  type: VERIFY_TOKEN_SUCCEEDED,
  payload: {
    routeState
  }
})

const verifyTokenStarted = () => ({
  type: VERIFY_TOKEN_STARTED,
})

const verifyTokenFailed = (error) => ({
  type: VERIFY_TOKEN_FAILED,
  payload: {
    error
  }
})
