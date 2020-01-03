import table from './table'
import form from './form'
import common from '../common'

let posts = {
  title: 'Posts',
  table: {...table, ...common.table},
  form: {...form, ...common.form},
}

export default posts
