import {
  GET_POSTS_SUCCESS,
  GET_POSTS_STARTED,
  GET_POSTS_FAILURE,
  CHANGE_PAGE,
} from '../../actions/posts/constants'
import initialState from './initialState'
import { getPage } from '../helpers'

const accounts = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_POSTS_SUCCESS:
      const {count, rows} = payload

      return {
        ...state,
        count,
        rows,
      }
    case GET_POSTS_STARTED:
      return {
        ...state
      }
    case GET_POSTS_FAILURE:
      return {
        ...state
      }
    case CHANGE_PAGE:
      const { action } = payload
      const page = getPage(action, state)
      
      return {
        ...state,
        page
      }
    default:
      return state
  }
}

export default accounts