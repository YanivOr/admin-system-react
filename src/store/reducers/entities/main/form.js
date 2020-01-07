import {
  STARTED,
  SUCCEEDED,
  FAILED,
} from '../../../../constants/api'

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
        state[entity].rows[state[entity].form.selectedRow.id] || {}
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
      [row.id]: row,
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
