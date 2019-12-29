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
    if (fetchToken(location) === INIT) {
      dispatch(verifyTokenFailure('No token'))
    }
    dispatch(verifyTokenStarted())

    axios
      .get(api.verifyToken,
          { headers: { Authorization: authHeader() } })
      .then(() => {
        dispatch(verifyTokenSuccess(location))
      })
      .catch(({ message }) => {
        dispatch(verifyTokenFailure(message))
      })
  }
}

const verifyTokenSuccess = (data) => ({
  type: VERIFY_TOKEN_SUCCESS,
  payload: {
    ...data
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
