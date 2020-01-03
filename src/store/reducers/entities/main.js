import {
  arrToHash,
  getPage,
  updateSortObject,
  getRowIds,
  countPages,
} from './process'

import {
  STARTED,
  SUCCEEDED,
  FAILED,
} from '../../../constants/api'

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

export const resetRowId = (state, entity) => ({
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

export const clearRowId = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      selectedRow: {}
    }
  }
})

export const saveItemStarted = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      saveState: STARTED,
    }
  }
})

export const saveItemSucceeded = (state, entity, { row }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      selectedRow: row,
      saveState: SUCCEEDED,
    },
    rows: {
      ...state[entity].rows,
      [state[entity].form.selectedRow.id || row.id]: row,
    }
  }
})

export const saveItemFailed = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    form: {
      ...state[entity].form,
      saveState: FAILED,
    }
  }
})
