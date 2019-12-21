import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import schema from '../../reducers/posts/schema'
import { getPosts } from '../../actions/posts'
import Entity from './Entity'

const Wrapper = styled.div``

const Posts = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const {posts} = state
  const title = 'Posts'

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Wrapper>
      <Entity
        title={title}
        schema={schema}
        data={posts}
      />
    </Wrapper>
  )
}

export default Posts
