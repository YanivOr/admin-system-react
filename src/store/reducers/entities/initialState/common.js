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
  gridEditor: {
    selectedGridRow: {
      boundingRect: {
        bottom: 0,
        height: 0,
        left  : 0,
        right : 0,
        top   : 0,
        width : 0,
      },
      clickEventData: {
        x: 0,
        y: 0,
      },
      toolbar: {
        display: false,
      }
    },
  },
  rows: {},
}

export default common
