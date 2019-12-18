import axios from 'axios'
import types from './types'

const { 
  GET_ACCOUNTS_SUCCESS, 
  GET_ACCOUNTS_STARTED, 
  GET_ACCOUNTS_FAILURE } = types

export const getAccounts = data => {
  return dispatch => {
    dispatch(getAccountsStarted())

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title: 'title123',
        userId: '12i2i2u3',
        completed: false
      })
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
