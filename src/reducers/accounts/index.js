import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_STARTED,
  GET_ACCOUNTS_FAILURE
} from '../../actions/accounts/constants'

const accounts = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS_SUCCESS:
      const {rows} = action.payload

      return [
        ...rows
      ]
    case GET_ACCOUNTS_STARTED:
      return [
        ...state
      ]
    case GET_ACCOUNTS_FAILURE:
      return [
        ...state
      ]
    default:
      return state
  }
}

export default accounts