import axios from 'axios'
import {
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_STARTED,
  VERIFY_TOKEN_FAILURE,
  INIT,
} from './constants'
import { api } from '../../../config'
import { fetchToken, authHeader } from '../../../services/auth'

export const handleAuth = ({ location }) => {
  return dispatch => {
    const routeState = fetchToken(location)
    if (routeState === INIT) {
      dispatch(verifyTokenFailure('No token'))
      return
    }
    dispatch(verifyTokenStarted())

    axios
      .get(api.verifyToken,
          { headers: { Authorization: authHeader() } })
      .then(() => {
        dispatch(verifyTokenSuccess(routeState))
      })
      .catch(({ message }) => {
        dispatch(verifyTokenFailure(message))
      })
  }
}

const verifyTokenSuccess = (routeState) => ({
  type: VERIFY_TOKEN_SUCCESS,
  payload: {
    routeState
  }
})

const verifyTokenStarted = () => ({
  type: VERIFY_TOKEN_STARTED,
})

const verifyTokenFailure = (error) => ({
  type: VERIFY_TOKEN_FAILURE,
  payload: {
    error
  }
})
