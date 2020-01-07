import mergeDeep from '../../../../services/mergeDeep'
import accounts from './accounts/index'
import posts from './posts/index'
import common from './common'

export default {
  accounts: mergeDeep(common, accounts),
  posts: mergeDeep(common, posts),
}
