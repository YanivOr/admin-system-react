const initialState = {
  accounts: {
    title: 'Accounts',
    count: 0,
    q: null,
    page: 1,
    limit: 5,
    sort: null,
    fields: [
      'id',
      'username',
      'phone',
      'email',
      'roles',
      'enabledActions',
      'disabledActions',
      'createdAt',
      'updatedAt'
    ],
    rows: [],
  },
  posts: {
    title: 'Posts',
    count: 0,
    q: null,
    page: 1,
    limit: 1,
    sort: null,
    fields: [
      'id',
      'title',
      'content',
      'tags',
      'thumbnail',
      'createdAt',
      'updatedAt',
    ],
    rows: [],
  }
}

export default initialState
