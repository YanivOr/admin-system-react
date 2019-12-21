import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPosts } from '../../actions/posts'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Posts = ({state, getPosts}) => {
  const {posts} = state

  const schema = [
    'id',
    'title',
    'content',
    'tags',
    'thumbnail',
    'createdAt',
    'updatedAt',
  ]

  return (
    <Wrapper>
      <Sticker onClick={getPosts}>Posts</Sticker>
      <Table
        schema={schema}
        data={posts}/>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = { getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
