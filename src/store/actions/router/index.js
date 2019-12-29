import {
  SET_ROUTE_STATE,
} from './constants'

export const setRouteState = (routeState) => {
  return dispatch => {
    dispatch({
      type: SET_ROUTE_STATE,
      payload: {
        routeState
      }
    })
  }
}
