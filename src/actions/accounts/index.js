import axios from 'axios'
import { API_ACCOUNTS } from '../../config'
import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_STARTED,
  GET_ACCOUNTS_FAILURE
} from './constants'
import { authHeader } from '../../services/auth'

export const getAccounts = () => {
  return dispatch => {
    dispatch(getAccountsStarted())

    axios
      .get(API_ACCOUNTS, 
          { headers: { Authorization: authHeader() } })
      .then(res => {
        dispatch(getAccountsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getAccountsFailure(err.message))
      })
  }
}

const getAccountsSuccess = data => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: {
    ...data
  }
})

const getAccountsStarted = () => ({
  type: GET_ACCOUNTS_STARTED
})

const getAccountsFailure = error => ({
  type: GET_ACCOUNTS_FAILURE,
  payload: {
    error
  }
})
