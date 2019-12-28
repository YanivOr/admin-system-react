import {
  getPage,
  updateSortObject,
  sortByFields,
  filterByFields,
} from './process'

export const getItemsSuccess = (state, entity, {count, rows}) => {
  return {
    ...state,
    [entity]: {
      ...state[entity],
      count,
      rows,
      filteredRows: rows,
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
  return {
    ...state,
    [entity]: {
      ...state[entity],
      page: getPage(action, state[entity]),
    }
  }
}

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

export const populateForm = (state, entity, { selectedRowId }) => {
  return {
    ...state,
    [entity]: {
      ...state[entity],
      selectedRowId,
    }
  }
}

export const updateField = (state, entity, { field, value}) => {
  const { selectedRowId, rows } = state[entity]

  if (selectedRowId) {
    const selectedRow = rows.filter(({id}) => {
      return id === selectedRowId
    })[0]

    console.log(selectedRow)
  } else {
    //const selectedRow = rows
    //console.log(temp)
  }

  return {
    ...state,
    [entity]: {
      ...state[entity],
      rows,
    }
  }
}
