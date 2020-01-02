import {
  arrToHash,
  getPage,
  updateSortObject,
  getRowIds,
  countPages,
} from './process'

export const getItemsSucceeded = (state, entity, { rows }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    rows:
      arrToHash(rows),
    table: {
      ...state[entity].table,
      fetchState: 'SUCCEEDED',
    }
  }
})

export const getItemsStarted = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      fetchState: 'STARTED',
    }
  }
})

export const getItemsFailed = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    table: {
      ...state[entity].table,
      fetchState: 'FAILED',
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

export const changePage = (state, entity, { action }) => {
  const { table, table: { limit, page, count }} = state[entity]
 
  return ({
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        page:
          getPage(action, page, limit, count)
      },
    }
  })
}

export const sortData = (state, entity, { field }) => {
  const { table ,table :{ sort }}  = state[entity]

  return {
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        sort: 
          updateSortObject(sort, field),
      }
    }
  }
}

export const searchData = (state, entity, { q }) => {
  const { table }  = state[entity]

  return {
    ...state,
    [entity]: {
      ...state[entity],
      table: {
        ...table,
        q,
        page: 1,
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

export const updateField = (state, entity, { field, value}) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      selectedRow: {
        ...state[entity].form.selectedRow,
        [field]: value,
      },
    }
  }
})

export const resetRowId = (state, entity) => {
  return ({
    ...state,
    [entity]: {
      ...state[entity],
      form: {
        ...state[entity].form,
        selectedRow: 
          state[entity].rows[state[entity].form.selectedRow.id]
      }
    }
  })
}

export const clearRowId = (state, entity) => {
  return ({
    ...state,
    [entity]: {
      ...state[entity],
      form: {
        ...state[entity].form,
        selectedRow: {}
      }
    }
  })
}

export const saveItemSucceeded = (state, entity, payload) => {

}

export const saveItemStarted = (state, entity) => {

}

export const saveItemFailed = (state, entity) => {

}
