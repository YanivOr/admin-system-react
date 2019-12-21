import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Sticker } from '../Common/Sticker'
import { getPosts } from '../../actions/posts/index'

const Wrapper = styled.div``

const Posts = ({dispatch}) => {

  const clicked = () => {
    dispatch(getPosts())
  }
  
  return (
    <Wrapper>
      <Sticker
        onClick={clicked}>Posts</Sticker>
    </Wrapper>
  )
} 

export default connect()(Posts)
