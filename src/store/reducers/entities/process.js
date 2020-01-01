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
export const getRowIds = (rows, limit, page, sort, q) => {
  const nextItems = limit * (page -1) // for later use in slice for paging

  // I need to get the total number of rows 
  // after filtering (search bar) but before paging (slice function)
  // for later return it back alongside the row ids

  const filteredRows = Object
    .values(rows)

    // Search by term (q)
    .filter(item => {
      for (let [, value] of Object.entries(item)) {
        if (new RegExp(q).test(value.toString())) {
          return item
        }
      }
      return false
    })

  const rowIds = filteredRows
    // Sorting by multiple columns
    .sort((a, b) => {
      let results = 0
    
      for (let [key, value] of Object.entries(sort)) {
        if (value === -1) b = [a, a = b][0] // swap a and b if desc
        results = results || a[key].toString().localeCompare(b[key].toString(), 'en', {sensitivity: 'base'})
      }
    
      return results
    })

    // Paging
    .slice(nextItems, nextItems + limit)

    // Reduce into array of row ids
    .reduce((obj, item) => {
      return [...obj, item.id]
    }, [])

  return [rowIds, filteredRows.length]
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
/**/

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

