export const gridRowClicked = (state, entity) => ({
  ...state,
  [entity]: {
    ...state[entity],
    toolbar: {
      ...state[entity].toolbar,
      pos: [100, 200]
    }
  }
})

