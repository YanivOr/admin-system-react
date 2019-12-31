import { fields } from './accounts'

export const initialState = {
  accounts: {
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
  },
}

export default initialState
