import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import schema from '../../reducers/accounts/schema'
import { getAccounts } from '../../actions/accounts'
import Entity from './Entity'

const Wrapper = styled.div``

const Accounts = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const {accounts} = state
  const title = 'Accounts'

  useEffect(() => {
    dispatch(getAccounts())
  }, [dispatch])

  return (
    <Wrapper>
      <Entity
        title={title}
        schema={schema}
        data={accounts}
      />
    </Wrapper>
  )
}

export default Accounts
