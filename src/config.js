let API_ACCOUNTS = `http://127.0.0.1:3001/accounts`
let API_POSTS = `http://127.0.0.1:3002/posts`

if (process.env.NODE_ENV === 'production') {
  API_ACCOUNTS = `http://127.0.0.1:3001/accounts`
  API_POSTS = `http://127.0.0.1:3002/posts`
  // API_ACCOUNTS = `http://188.166.28.195:3001/accounts`
  // API_POSTS = `http://188.166.28.195:3002/posts`
}

export {
  API_ACCOUNTS,
  API_POSTS,
}