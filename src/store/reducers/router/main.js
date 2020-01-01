export const verifyTokenSuccess = (state, {routeState}) => ({
  ...state,
  routeState
})

export const verifyTokenStarted = (state) => ({
  ...state
})

export const verifyTokenFailure = (state) => ({
  ...state
})
