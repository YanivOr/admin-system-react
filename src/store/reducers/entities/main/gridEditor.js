import {
  TEXT,
  BLANK,
  FORM,
  PAGE,
} from '../../../../constants/entities'

export const gridRowClicked = (state, entity, { index, clientRect }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    gridEditor: {
      ...state[entity].gridEditor,
      selectedGridRow: {
        ...state[entity].gridEditor.selectedGridRow,
        index,
        ...clientRect,
        toolbar: {
          display: true,
        },
      },
    }
  }
})

export const hideToolbar = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    gridEditor: {
      ...state[entity].gridEditor,
      selectedGridRow: {
        ...state[entity].gridEditor.selectedGridRow,
        toolbar: {
          display: false,
        },
      },
    }
  } 
})

export const toolbarText = (state, entity) => {
  const index = state[entity].gridEditor.selectedGridRow.index
  const rowContent = state[entity].gridEditor.gridContent[index].rowContent

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      gridEditor: {
        ...state[entity].gridEditor,
        editForm: {
          ...state[entity].gridEditor.editForm,
          display: true,
          content: rowContent,
        },
      }
    } 
  })
}

export const editFormChanged = (state, entity, { content }) => {
  const index = state[entity].gridEditor.selectedGridRow.index
  const rowContent = state[entity].gridEditor.gridContent[index].rowContent

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      gridEditor: {
        ...state[entity].gridEditor,
        gridContent: [
          ...state[entity].gridEditor.gridContent.slice(0, index),
          {
            rowType: TEXT, 
            rowStatus: FORM,
            rowContent,
          },
          ...state[entity].gridEditor.gridContent.slice(index + 1),
        ],
        editForm: {
          ...state[entity].gridEditor.editForm,
          content,
        },
      }
    } 
  })
}

export const editFormSubmitted = (state, entity) => {
  const index = state[entity].gridEditor.selectedGridRow.index
  const content = state[entity].gridEditor.editForm.content

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      gridEditor: {
        ...state[entity].gridEditor,
        gridContent: [
          ...state[entity].gridEditor.gridContent.slice(0, index),
          {
            ...state[entity].gridEditor.gridContent[index],
            rowStatus: PAGE,
            rowContent: content,
          },
          ...state[entity].gridEditor.gridContent.slice(index + 1),
        ],
        editForm: {
          display: false,
          content: '',
        },
      }
    } 
  })
}

export const editFormCanceled = (state, entity) => {
  const index = state[entity].gridEditor.selectedGridRow.index
  const rowContent = state[entity].gridEditor.gridContent[index].rowContent
  const rowType = rowContent ? state[entity].gridEditor.gridContent[index].rowType : BLANK
  const rowStatus = rowContent ? PAGE : null

  return ({
    ...state,
    [entity]: {
      ...state[entity],
      gridEditor: {
        ...state[entity].gridEditor,
        gridContent: [
          ...state[entity].gridEditor.gridContent.slice(0, index),
          {
            rowType,
            rowStatus,
            rowContent,
          },
          ...state[entity].gridEditor.gridContent.slice(index + 1),
        ],
        editForm: {
          display: false,
          content: '',
        },
      }
    } 
  })
}
