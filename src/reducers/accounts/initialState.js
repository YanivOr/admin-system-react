const initialState = {
  title: 'Accounts',
  count: 0,
  q: null,
  page: 1,
  limit: 0,
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
}

export default initialState
