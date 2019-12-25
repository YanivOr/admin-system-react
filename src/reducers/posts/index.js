import {
  GET_POSTS_SUCCESS,
  GET_POSTS_STARTED,
  GET_POSTS_FAILURE
} from '../../actions/posts/constants'
import initialState from './initialState'

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      const {count, rows} = action.payload

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
    default:
      return state
  }
}

export default accounts