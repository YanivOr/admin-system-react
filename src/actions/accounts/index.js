import axios from 'axios'
import { API_ACCOUNTS } from '../../config'
import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_STARTED,
  GET_ACCOUNTS_FAILURE
} from './constants'

export const getAccounts = () => {
  return dispatch => {
    dispatch(getAccountsStarted())

    const token = localStorage.getItem('token')
    const AuthStr = 'Bearer '.concat(token)

    axios
      .get(API_ACCOUNTS, 
          { headers: { Authorization: AuthStr } })
      .then(res => {
        dispatch(getAccountsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getAccountsFailure(err.message))
      })
  }
}

const getAccountsSuccess = item => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: {
    ...item
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
