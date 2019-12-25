import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_STARTED,
  GET_ACCOUNTS_FAILURE,
  CHANGE_PAGE,
} from '../../actions/accounts/constants'
import initialState from './initialState'
import { getPage } from '../helpers'

const accounts = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ACCOUNTS_SUCCESS:
      const {count, rows} = payload

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