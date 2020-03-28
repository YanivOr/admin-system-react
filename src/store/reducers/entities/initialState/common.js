import {
  BLANK,
} from '../../../../constants/entities'

const common = {
  table: {
    count: 0,
    page: 1,
    limit: 5,
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
      index: null,
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
      },
    },
    gridContent: [
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
      {rowType: BLANK, rowStatus: null, rowContent: null},
    ],
    editForm: {
      display: false,
      content: '',
    },
  },
  rows: {},
}

export default common
