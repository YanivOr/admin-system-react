import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_STARTED,
  GET_ITEMS_FAILURE,
  CHANGE_PAGE,
} from '../../actions/entity/constants'
import initialState from './initialState'
import { getPage } from './helpers'

const entity = (state = initialState, {type, entity, payload}) => {
  let clonedState;

  switch (type) {
    case GET_ITEMS_SUCCESS:
      const {count, rows} = payload

      clonedState = {...state}
      clonedState[entity] = {...clonedState[entity], count, rows}

      return {
        ...state,
        ...clonedState,
      }
    case GET_ITEMS_STARTED:
      return {
        ...state
      }
    case GET_ITEMS_FAILURE:
      return {
        ...state
      }
    case CHANGE_PAGE:
      const { action } = payload
      const page = getPage(action, state[entity])

      clonedState = {...state}
      clonedState[entity] = {...clonedState[entity], page}

      return {
        ...state,
        ...clonedState
      }
    default:
      return state
  }
}

export default entity