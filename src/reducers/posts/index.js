import {
  GET_POSTS_SUCCESS,
  GET_POSTS_STARTED,
  GET_POSTS_FAILURE
} from '../../actions/posts/constants'

const accounts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      const {rows} = action.payload

      return [
        ...rows
      ]
    case GET_POSTS_STARTED:
      return [
        ...state
      ]
    case GET_POSTS_FAILURE:
      return [
        ...state
      ]
    default:
      return state
  }
}

export default accounts