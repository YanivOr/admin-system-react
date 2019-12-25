import React from 'react'
import styled from 'styled-components'
import Entity from './Entity'
import { getAccounts } from '../../actions/accounts'

const Wrapper = styled.div``

const Accounts = () => {
  return (
    <Wrapper>
      <Entity
        type="accounts"
        getEntities={getAccounts}
      />
    </Wrapper>
  )
}

export default Accounts
