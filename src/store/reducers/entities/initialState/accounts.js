const fields = {
  id: {
    label: 'ID'
  },
  username: {
    label: 'Username'
  },
  phone: {
    label: 'Phone'
  },
  email: {
    label: 'E-mail'
  },
  roles: {
    label: 'Roles'
  },
  enabledActions: {
    label: 'Enabled actions'
  },
  disabledActions: {
    label: 'Disabled actions'
  },
  createdAt: {
    label: 'Created at'
  },
  updatedAt: {
    label: 'Updated at'
  },
}

const accounts = {
  title: 'Accounts',
  table: {
    count: 0,
    page: 1,
    limit: 5,
    pagesCount: 0,
    q: '',
    sort: {},
    fields,
    rowIds: [],
  },
  form: {
    selectedRow: {},
    fields,
  },
  rows: {},
}

export default accounts
