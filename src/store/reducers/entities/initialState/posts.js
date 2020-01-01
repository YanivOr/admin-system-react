const fields = {
  id: {
    label: 'ID'
  },
  title: {
    label: 'Title'
  },
  content: {
    label: 'Content'
  },
  tags: {
    label: 'Tags'
  },
  thumbnail: {
    label: 'Thumbnail'
  },
  createdAt: {
    label: 'Created at'
  },
  updatedAt: {
    label: 'Updated at'
  },
}

const posts = {
  title: 'Posts',
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

export default posts
