import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_STARTED,
  GET_ACCOUNTS_FAILURE
} from '../../actions/accounts/constants'
import initialState from './initialState'

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS_SUCCESS:
      const {count, rows} = action.payload

      return {
        ...state,
        count,
        rows,
      }
    case GET_ACCOUNTS_STARTED:
      return {
        ...state
      }
    case GET_ACCOUNTS_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}

export default accounts