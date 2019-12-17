const accounts = (state = [], action) => {
  switch (action.type) {
    case 'GET_ACCOUNTS':
      return [
        ...state,
        {
          id: 123,
          text: 'ygygygy',
          completed: false
        }
      ]
    default:
      return state
  }
}

export default accounts