const authenticate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

const validateToken = (token, pathname, source) => {
  // If token exists and its length is correct
  // Also, if validate URL token, the pathname must be root
  // Else - if localStorage token - the pathname can be anything
  if(token && token.length > 256 && !(source === 'url' && pathname !== '/')) {
    return new Promise(async (resolve, reject) => {
      const authResults = await authenticate();
      if (authResults) {
        localStorage.setItem('token', token);
      }
      resolve(authResults);
    });
  }
}

const checkAuth = async (props) => {
  const {location: {search, pathname}} = props;
  let token;

  return new Promise(async (resolve) => {
    // Get token from localStorage
    token = localStorage.getItem('token');
    const resultsLocalStorage = await validateToken(token, pathname, 'storage');

    // Get token from url
    const url = new URL(`http://p.holder/${search}`);
    token = url.searchParams.get('token');
    const resultsUrl = await validateToken(token, pathname, 'url');

    resolve(resultsLocalStorage || resultsUrl);
  });
}

export {
  checkAuth
};
