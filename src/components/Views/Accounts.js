import React from 'react'
import styled from 'styled-components'
import Entity from './Entity'
import { getAccounts, changePage } from '../../actions/accounts'

const Wrapper = styled.div``

const Accounts = () => (
  <Wrapper>
    <Entity
      type="accounts"
      getEntities={getAccounts}
      changePage={changePage}
    />
  </Wrapper>
)

export default Accounts
