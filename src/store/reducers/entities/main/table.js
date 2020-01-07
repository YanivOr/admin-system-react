import {
  arrToHash,
  getPage,
  updateSortObject,
  getRowIds,
  countPages,
} from '../process'

import {
  STARTED,
  SUCCEEDED,
  FAILED,
} from '../../../../constants/api'

export const getItemsStarted = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      fetchState: STARTED,
    }
  }
})

export const getItemsSucceeded = (state, entity, { rows }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    rows:
      arrToHash(rows),
    table: {
      ...state[entity].table,
      fetchState: SUCCEEDED,
    }
  }
})

export const getItemsFailed = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      fetchState: FAILED,
    }
  }
})

export const getProcessedItems = (state, entity) => {
  const { rows, table, table: { limit, page, sort, q }} = state[entity]
  const [rowIds, count] = getRowIds(rows, limit, page, sort, q)

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        rowIds,
        pagesCount:
          countPages(count, limit),
        count,
      }
    }
  })
}

export const changePage = (state, entity, { action }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      page:
        getPage(action, state[entity].table.page, state[entity].table.limit, state[entity].table.count)
    },
  }
})

export const sortData = (state, entity, { field }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      sort: 
        updateSortObject(state[entity].table.sort, field),
    }
  }
})

export const searchData = (state, entity, { q }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      q,
      page: 1,
    }
  }
})
