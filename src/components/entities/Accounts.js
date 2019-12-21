import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from '../layout/Common'
import { getAccounts } from '../../actions/accounts/index'

const Wrapper = styled.div``

const Accounts = ({state, getAccounts}) => {
  const {accounts} = state

  return (
    <Wrapper>
      <Sticker
        onClick={getAccounts}>Accounts</Sticker>
      {accounts.map(({id, username, phone, email, roles, enabledActions, disabledActions, createdAt, updatedAt}, key) => {

        return (
          <div key={key}>
            <div>{id}</div>
            <div>{username}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{roles}</div>
            <div>{enabledActions}</div>
            <div>{disabledActions}</div>
            <div>{createdAt}</div>
            <div>{updatedAt}</div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = { getAccounts }

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
