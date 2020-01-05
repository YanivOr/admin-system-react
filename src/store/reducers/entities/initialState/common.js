const common = {
  table: {
    count: 0,
    page: 1,
    limit: 10,
    pagesCount: 0,
    q: '',
    sort: {
      createdAt: -1
    },
    rowIds: [],
    fetchState: null,
  },
  form: {
    selectedRow: {},
    saveState: null,
  },
  rows: {},
}

export default common