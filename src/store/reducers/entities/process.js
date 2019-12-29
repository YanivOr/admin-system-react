import {
  GO_TO_FIRST_PAGE,
  GO_TO_PREV_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_LAST_PAGE,
  REFRESH,
} from '../../../components/Common/Table/constants'

export const arrToObj = (array, key) => {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, {});
}

export const getPageData = (rows, limit, page) => {
  const nextItems = limit * (page -1)
  return rows.slice(nextItems, nextItems + limit)
}

export const countPages = (count, limit) => {
  return Math.ceil(count / limit)
}

export const getPage = (action, {page, limit, count}) => {
  switch (action) {
    case GO_TO_FIRST_PAGE:
      return 1
    case GO_TO_PREV_PAGE:
      return page > 1 ? page - 1 : 1
    case GO_TO_NEXT_PAGE:
      return page < Math.ceil(count / limit) ? page + 1 : page
    case GO_TO_LAST_PAGE:
      return Math.ceil(count / limit)
    case REFRESH:
      return 1
    default:
      return parseInt(action)
  }
}

export const updateSortObject = (sort, field) => {
  const sortObj = {...sort}

  if (sortObj.hasOwnProperty(field)) {
    if (sortObj[field] === 1) {
      sortObj[field] = -1
    }
    else {
      delete sortObj[field]
    }
  }
  else {
    sortObj[field] = 1
  }

  return sortObj
}

export const sortByFields = (filteredRows, sort) => {
  return [...filteredRows].sort((a, b) => {
    let results = 0
  
    for (let [key, value] of Object.entries(sort)) {
      if (value === -1) b = [a, a = b][0] // swap a and b if desc
      results = results || a[key].toString().localeCompare(b[key].toString(), 'en', {sensitivity: 'base'})
    }
  
    return results
  })
}

export const filterByFields = (rows, q) => {
  const filteredRows = rows.filter(item => {
    for (let [, value] of Object.entries(item)) {
      if (new RegExp(q).test(value.toString())) {
        return item
      }
    }
    return false
  })

  return {
    filteredRows,
    count: filteredRows.length
  }
}
