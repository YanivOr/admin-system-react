import  {
  storageGet,
  storageSet,
} from '../../../services/storage'
import {

} from './process'
import {
  INIT,
  ROUTE,
  REDIRECT
} from './constants'

export const setRouteState = (state, {search, pathname}) => {
  let routeState = INIT

  // Get token from localStorage
  const tokenLocalStorage = storageGet('token')

  // Get token from url
  const url = new URL(`http://p.holder/${search}`)
  const tokenUrl = url.searchParams.get('token')

  // Validate localStorage token if exists
  if(tokenLocalStorage) {
    storageSet('token', tokenLocalStorage)
    routeState = ROUTE
  }

  // Validate URL token if exists and if path is root
  if (tokenUrl && pathname === '/') {
    storageSet('token', tokenUrl)
    routeState = REDIRECT
  }

  return ({
    ...state,
    routeState
  })
}
