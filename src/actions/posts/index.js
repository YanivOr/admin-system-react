import axios from 'axios'
import { API_POSTS } from '../../config'
import { 
  GET_POSTS_SUCCESS, 
  GET_POSTS_STARTED, 
  GET_POSTS_FAILURE,
  CHANGE_PAGE,
} from './constants'
import { authHeader } from '../../services/auth'

export const getPosts = () => {
  return dispatch => {
    dispatch(getPostsStarted())

    axios
      .get(API_POSTS, 
          { headers: { Authorization: authHeader() } })
      .then(res => {
        dispatch(getPostsSuccess(res.data))
      })
      .catch(err => {
        dispatch(getPostsFailure(err.message))
      })
  }
}

const getPostsSuccess = data => ({
  type: GET_POSTS_SUCCESS,
  payload: {
    ...data
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

export const changePage = (action) => {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      payload: {
        action
      }
    })
  }
}
