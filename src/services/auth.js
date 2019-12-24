import { storageSet, storageGet } from './storage'

const authHeader = () => {
  return `Bearer ${storageGet('token')}`
}

const authenticate = () => {
  return new Promise((resolve, reject) => {
    resolve(true)
  })
}

const validateToken = (token) => {
  // If token exists and its length is correct
  if(token && token.length > 256) {
    return new Promise(async (resolve, reject) => {
      const authResults = await authenticate()
      if (authResults) {
        storageSet('token', token)
      }
      resolve(authResults)
    })
  }
}

const checkAuth = async (props) => {
  const {location: {search, pathname}} = props

  return new Promise(async (resolve) => {
    // Get token from localStorage
    const tokenLocalStorage = storageGet('token')

    // Get token from url
    const url = new URL(`http://p.holder/${search}`)
    const tokenUrl = url.searchParams.get('token')

    // Validate localStorage token
    if(tokenLocalStorage) {
      const resultsLocalStorage = await validateToken(tokenLocalStorage)

      if (resultsLocalStorage) {
        resolve({
          redirect: !!tokenUrl,
          isTokenValid: resultsLocalStorage
        })
      }
    }

    // Validate URL token
    if (tokenUrl && pathname === '/') {
      const resultsUrl = await validateToken(tokenUrl, pathname)

      resolve({
        redirect: !!tokenUrl,
        isTokenValid: resultsUrl
      })
    }
  })
}

export {
  checkAuth,
  authHeader,
}
