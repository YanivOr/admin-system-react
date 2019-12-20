import axios from 'axios'
import types from './types'

const { 
  GET_ACCOUNTS_SUCCESS, 
  GET_ACCOUNTS_STARTED, 
  GET_ACCOUNTS_FAILURE } = types

export const getAccounts = () => {
  return dispatch => {
    dispatch(getAccountsStarted())

    const token = localStorage.getItem('token')
    const AuthStr = 'Bearer '.concat(token)

    axios
      .get(`http://127.0.0.1:3001/accounts`, 
          { headers: { Authorization: AuthStr } })
      .then(res => {
        dispatch(getAccountsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getAccountsFailure(err.message))
      })
  }
}

const getAccountsSuccess = todo => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: {
    ...todo
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
