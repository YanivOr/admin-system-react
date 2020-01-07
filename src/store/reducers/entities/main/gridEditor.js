export const gridRowClicked = (state, entity, { clientRect }) => ({
  ...state,
  [entity]: {
    ...state[entity],
    gridEditor: {
      ...state[entity].gridEditor,
      selectedGridRow: {
        ...state[entity].gridEditor.selectedGridRow,
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
