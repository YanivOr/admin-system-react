import {
  VERIFY_TOKEN_SUCCEEDED,
  VERIFY_TOKEN_STARTED,
  VERIFY_TOKEN_FAILED,
} from './types'

export const verifyTokenSucceeded = (routeState) => ({
  type: VERIFY_TOKEN_SUCCEEDED,
  payload: {
    routeState
  }
})

export const verifyTokenStarted = () => ({
  type: VERIFY_TOKEN_STARTED,
})

export const verifyTokenFailed = (error) => ({
  type: VERIFY_TOKEN_FAILED,
  payload: {
    error
  }
})
