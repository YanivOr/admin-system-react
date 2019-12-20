import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from '../layout/Common'
import { getAccounts } from '../actions/accounts'

const Wrapper = styled.div``

const Accounts = ({dispatch}) => {

  const clicked = () => {
    dispatch(getAccounts())
  }
  
  return (
    <Wrapper>
      <Sticker
        onClick={clicked}>Accounts</Sticker>
    </Wrapper>
  )
} 

export default connect()(Accounts)
