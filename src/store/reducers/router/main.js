export const verifyTokenSucceeded = (state, {routeState}) => ({
  ...state,
  routeState
})

export const verifyTokenStarted = (state) => ({
  ...state
})

export const verifyTokenFailed = (state) => ({
  ...state
})
