const initialState = {
  accounts: {
    title: 'Accounts',
    count: 0,
    q: null,
    page: 1,
    limit: 5,
    sort: {},
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
    filteredRows: [],
  },
  posts: {
    title: 'Posts',
    count: 0,
    q: null,
    page: 1,
    limit: 1,
    sort: {},
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
    filteredRows: [],
  }
}

export default initialState
