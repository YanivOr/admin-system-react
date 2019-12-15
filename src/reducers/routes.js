const routes = (state = [], action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default routes