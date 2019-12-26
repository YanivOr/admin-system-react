import {
  GO_TO_FIRST_PAGE,
  GO_TO_PREV_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_LAST_PAGE,
  REFRESH,
} from '../../components/Common/Table/constants'

export const getItemsSuccess = (state, entity, payload) => {
  const {count, rows} = payload

  const clonedState = {...state}
  clonedState[entity] = {...clonedState[entity], count, rows}

  return {
    ...clonedState,
  }
}

export const getItemsStarted = (state) => {
  return {
    ...state
  }
}

export const getItemsFailure = (state) => {
  return {
    ...state
  }
}

export const changePage = (state, entity, payload) => {
  const { action } = payload
  const page = getPage(action, state[entity])

  const clonedState = {...state}
  clonedState[entity] = {...clonedState[entity], page}

  return {
    ...clonedState
  }
}

export const sortTable = (state, entity, payload) => {
    const { field } = payload

    const clonedState = {...state}
    const { sort }  = clonedState[entity]

    // Update sort state by field
    if (sort.hasOwnProperty(field)) {
      if (sort[field] === 1) {
        sort[field] = -1
      }
      else {
        delete sort[field]
      }
    }
    else {
      sort[field] = 1
    }

    return {
    ...clonedState,
  }
}

/* Private */
const getPage = (action, {page, limit, count}) => {
  switch (action) {
    case GO_TO_FIRST_PAGE:
      return 1
    case GO_TO_PREV_PAGE:
      return page > 1 ? page - 1 : 1
    case GO_TO_NEXT_PAGE:
      return page < Math.ceil(count / limit) ? page + 1 : page
    case GO_TO_LAST_PAGE:
      return Math.ceil(count / limit)
    case REFRESH:
      return 1
    default:
      return parseInt(action)
  }
}
