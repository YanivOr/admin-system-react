import types from '../actions/types'

const { 
  GET_ACCOUNTS_SUCCESS, 
  GET_ACCOUNTS_STARTED, 
  GET_ACCOUNTS_FAILURE } = types

const accounts = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS_SUCCESS:
      return [
        ...state
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