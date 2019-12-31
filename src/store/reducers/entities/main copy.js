import {
  arrToHash,
  pageRowIds,
  getPage,
  countPages,
  updateSortObject,
  sortByFields,
  filterByFields,
} from './process'

export const getItemsSuccess = (state, entity, { count, rows }) => {
  const { table, table: { limit, page } } = state[entity]

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        count,
        rowIds:
          pageRowIds(rows, limit, page),
        pagesCount:
          countPages(count, limit),
      },
      rows:
        arrToHash(rows),
    }
  })
}

export const getItemsStarted = (state) => ({
  ...state
})

export const getItemsFailure = (state) => ({
  ...state
})

export const changePage = (state, entity, { action }) => {
  const { rows, table, table: { limit, page, count }} = state[entity]
  const newPage = getPage(action, page, limit, count)
 
  return ({
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        rowIds:
          pageRowIds(rows, limit, newPage),
        page:
          newPage,
        pagesCount:
          countPages(count, limit),
      },
    }
  })
}

export const sortData = (state, entity, { field }) => {
  const { rows, table ,table :{ sort, limit, page, count}}  = state[entity]
  const newSort = updateSortObject(sort, field)
  const newRows = sortByFields(rows, newSort, limit, page)

  return {
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        sort: newSort,
        rowIds:
          pageRowIds(newRows, limit, page),
        pagesCount:
          countPages(count, limit),
      }
    }
  }
}

export const searchData = (state, entity, { q }) => {
  const { rows, table: { limit, page } }  = state[entity]
  const { filteredRows, count } = filterByFields(rows, q, limit, page)

  return {
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...state[entity].table,
        q,
        rowIds:
          pageRowIds(arrToHash(filteredRows), limit, page),
        count,
        page: 1,
        pagesCount:
          countPages(count, limit),
      }
    }
  }
}

export const populateForm = (state, entity, { rowId }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      selectedRow: state[entity].rows[rowId],
    }
  }
})

export const updateField = (state, entity, { field, value}) => {
  /*
  // const { rowId, rows } = state[entity]

  return {
    ...state,
  }
  */
}
