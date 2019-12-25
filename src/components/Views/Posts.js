import React from 'react'
import styled from 'styled-components'
import Entity from './Entity'
import { getPosts, changePage } from '../../actions/posts'

const Wrapper = styled.div``

const Posts = () => (
  <Wrapper>
    <Entity
      type="posts"
      getEntities={getPosts}
      changePage={changePage}
    />
  </Wrapper>
)

export default Posts
