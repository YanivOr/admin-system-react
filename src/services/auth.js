import { storageGet, storageSet } from './storage'
import {
  INIT,
  ROUTE,
  REDIRECT
} from '../constants/router'

export const authHeader = () => {
  return `Bearer ${storageGet('token')}`
}

export const fetchToken = ({search, pathname}) => {
  let routeState = INIT

  // Get token from localStorage
  const tokenLocalStorage = storageGet('token')

  // Get token from url
  const url = new URL(`http://p.holder/${search}`)
  const tokenUrl = url.searchParams.get('token')

  // Validate localStorage token exists
  if(tokenLocalStorage) {
    routeState = ROUTE
  }

  // Validate URL token exists and path is root
  if (tokenUrl && pathname === '/') {
    storageSet('token', tokenUrl)
    routeState = REDIRECT
  }

  return routeState
}
