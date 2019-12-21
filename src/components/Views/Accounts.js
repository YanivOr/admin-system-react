import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getAccounts } from '../../actions/accounts'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Accounts = ({state, getAccounts}) => {
  const {accounts} = state

  const schema = [
    'id',
    'username',
    'phone',
    'email',
    'roles',
    'enabledActions',
    'disabledActions',
    'createdAt',
    'updatedAt',
  ]

  return (
    <Wrapper>
      <Sticker onClick={getAccounts}>Accounts</Sticker>
      <Table
        schema={schema}
        data={accounts}/>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = { getAccounts }

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
