import axios from 'axios'
import { 
  GET_POSTS_SUCCESS, 
  GET_POSTS_STARTED, 
  GET_POSTS_FAILURE 
} from './constants'

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

const getPostsSuccess = item => ({
  type: GET_POSTS_SUCCESS,
  payload: {
    ...item
  }
})

const getPostsStarted = () => ({
  type: GET_POSTS_STARTED
})

const getPostsFailure = error => ({
  type: GET_POSTS_FAILURE,
  payload: {
    error
  }
})
