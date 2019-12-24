const storageSet = (key, value) => {
  try {
    return localStorage.setItem(key, value)
  }
  catch (e) {
    return false
  }
}

const storageGet = (key) => {
  try {
    return localStorage.getItem(key)
  }
  catch (e) {
    return false
  }
}

export {
  storageGet,
  storageSet,
}