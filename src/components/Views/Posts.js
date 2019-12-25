import React from 'react'
import styled from 'styled-components'
import Entity from './Entity'
import { getPosts } from '../../actions/posts'

const Wrapper = styled.div``

const Posts = () => {
  return (
    <Wrapper>
      <Entity
        type="posts"
        getEntities={getPosts}
      />
    </Wrapper>
  )
}

export default Posts
