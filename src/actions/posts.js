import axios from 'axios'
import types from './types'

const { 
  GET_ACCOUNTS_SUCCESS, 
  GET_ACCOUNTS_STARTED, 
  GET_ACCOUNTS_FAILURE } = types

export const getPosts = () => {
  return dispatch => {
    dispatch(getPostsStarted())

    const token = localStorage.getItem('token')
    const AuthStr = 'Bearer '.concat(token)

    axios
      .get(`http://127.0.0.1:3002/posts`, 
          { headers: { Authorization: AuthStr } })
      .then(res => {
        dispatch(getPostsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getPostsFailure(err.message))
      })
  }
}

const getPostsSuccess = todo => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: {
    ...todo
  }
})

const getPostsStarted = () => ({
  type: GET_ACCOUNTS_STARTED
})

const getPostsFailure = error => ({
  type: GET_ACCOUNTS_FAILURE,
  payload: {
    error
  }
})
