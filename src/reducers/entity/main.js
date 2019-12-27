import {
  GO_TO_FIRST_PAGE,
  GO_TO_PREV_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_LAST_PAGE,
  REFRESH,
} from '../../components/Common/Table/constants'

export const getItemsSuccess = (state, entity, {count, rows}) => {
  return {
    ...state,
    [entity]: {
      ...state[entity],
      count,
      rows
    }
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

export const changePage = (state, entity, { action }) => {
  const page = getPage(action, state[entity])

  const clonedState = {...state}
  clonedState[entity] = {...clonedState[entity], page}

  return {
    ...state,
    [entity]: {
      ...state[entity],
      page
    }
  }
}

export const sortTable = (state, entity, { field }) => {
    const { sort, rows }  = state[entity]

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

    // Sort by fields
    rows.sort((a, b) => {
      let results = 0
    
      for (let [key, value] of Object.entries(sort)) {
        if (value === -1) b = [a, a = b][0] // swap a and b if desc
        results = results || a[key].toString().localeCompare(b[key].toString(), 'es', {sensitivity: 'base'})
      }
    
      return results
    })

    return {
    ...state,
    [entity]: {
      ...state[entity],
      sort,
      rows,
    }
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
