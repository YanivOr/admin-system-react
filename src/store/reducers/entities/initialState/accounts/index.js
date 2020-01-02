import table from './table'
import form from './form'
import common from '../common'

let accounts = {
  title: 'Accounts',
  table: {...table, ...common.table},
  form: {...form, ...common.form},
}

export default accounts
