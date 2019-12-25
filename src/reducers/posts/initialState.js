const initialState = {
  title: 'Posts',
  count: 0,
  q: null,
  page: 1,
  limit: 0,
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

export default initialState
