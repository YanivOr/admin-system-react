import {
  GO_TO_FIRST_PAGE,
  GO_TO_PREV_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_LAST_PAGE,
  REFRESH,
} from '../../../components/Common/Table/constants'

/**
 * Converts an array of object into a hash table
 * 
 * @param {Array} array - array of objects
 * @param {String} key  - the field for using as a key
 */
export const arrToHash = (array, key = 'id') => {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, {});
}

/**
 * Returns an array of row ids for a relevant page
 * 
 * @param {Object} rows  - hash table
 * @param {Number} limit - rows in page
 * @param {Number} page  - page number
 */
export const pageRowIds = (rows, limit, page) => {
  const nextItems = limit * (page -1)
  return Object
          .values(rows)
            .slice(nextItems, nextItems + limit)
              .reduce((obj, item) => {
    return [...obj, item.id]
  }, [])
}

/**
 * Returns total number of pages
 * 
 * @param {Number} count - total number of rows
 * @param {Number} limit - rows in page
 */
export const countPages = (count, limit) => {
  return Math.ceil(count / limit)
}

/**
 * 
 * @param {String/Number} action - an action or a specific page number
 * @param {Number} page          - page number
 * @param {Number} limit         - rows in page
 * @param {Number} count         - total number of rows
 */
export const getPage = (action, page, limit, count) => {
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

/**
 * Updates the sort object by field
 * 
 * @param {Object} sort  - sort object
 * @param {String} field - field to modify
 */
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

/**
 * 
 * @param {*} rows 
 * @param {*} sort 
 * @param {*} limit 
 * @param {*} page 
 */
export const sortByFields = (rows, sort, limit, page) => {
  const nextItems = limit * (page -1)

  return Object.values(rows).sort((a, b) => {
    let results = 0
  
    for (let [key, value] of Object.entries(sort)) {
      if (value === -1) b = [a, a = b][0] // swap a and b if desc
      results = results || a[key].toString().localeCompare(b[key].toString(), 'en', {sensitivity: 'base'})
    }
  
    return results
  }).slice(nextItems, nextItems + limit).reduce((obj, item) => {
    return [...obj, item.id]
  }, [])
}

/**
 * 
 * @param {*} rows 
 * @param {*} q 
 * @param {*} limit 
 * @param {*} page 
 */
export const filterByFields = (rows, q, limit, page) => {
  const nextItems = limit * (page -1)

  const filteredRows = Object.values(rows).filter(item => {
    for (let [, value] of Object.entries(item)) {
      if (new RegExp(q).test(value.toString())) {
        return item
      }
    }
    return false
  }).slice(nextItems, nextItems + limit)

  return {
    filteredRows,
    count: filteredRows.length
  }
}
