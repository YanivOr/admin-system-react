import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from './Common'
import { getAccounts } from '../actions'

const Wrapper = styled.div``

const Dashboard = ({dispatch}) => {

  const clicked = () => {
    dispatch(getAccounts('test123'))
  }

  return (
    <Wrapper>
      <Sticker
        onClick={clicked}>Dashboard</Sticker>
    </Wrapper>
  )
}

export default connect()(Dashboard)
