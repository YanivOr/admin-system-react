import {
  getPage,
  updateSortObject,
  sortByFields,
  filterByFields,
  arrToObj,
  getPageData,
  countPages,
} from './process'

export const getItemsSuccess = (state, entity, {count, rows}) => ({
  ...state,
  [entity]: {
    ...state[entity],
    count,
    rows: arrToObj(rows, 'id'),
    filteredRows: getPageData(rows, state[entity].limit, state[entity].page),
    pagesCount: countPages(count, state[entity].limit),
  }
})

export const getItemsStarted = (state) => ({
  ...state
})

export const getItemsFailure = (state) => ({
  ...state
})


export const changePage = (state, entity, { action }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    page: getPage(action, state[entity]),
    filteredRows: getPageData(state[entity].rows, state[entity].limit, state[entity].page),
//    pagesCount: Math.ceil(state[entity].count / state[entity].limit) || 1,
  }
})

export const sortData = (state, entity, { field }) => {
  const { sort, filteredRows }  = state[entity]

  return {
    ...state,
    [entity]: {
      ...state[entity],
      sort: updateSortObject(sort, field),
      filteredRows: sortByFields(filteredRows, sort),
    }
  }

}

export const searchData = (state, entity, { q }) => {
  const { rows }  = state[entity]
  const { filteredRows, count } = filterByFields(rows, q)

  return {
    ...state,
    [entity]: {
      ...state[entity],
      q,
      filteredRows,
      count,
      page: 1,
    }
  }
}

export const populateForm = (state, entity, { rowId }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    selectedRow: state[entity].rows[rowId],
  }
})

export const updateField = (state, entity, { field, value}) => {
  // const { rowId, rows } = state[entity]

  return {
    ...state,
  }
}
