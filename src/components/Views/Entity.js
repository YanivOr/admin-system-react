import React from 'react'
import styled from 'styled-components'
import { Sticker } from '../Common/Sticker'
import Table from '../Common/Table'

const Wrapper = styled.div``

const Entity = ({title, schema, data}) => (
  <Wrapper>
    <Sticker>{title}</Sticker>
    <Table
      schema={schema}
      data={data}/>
  </Wrapper>
)

export default Entity
