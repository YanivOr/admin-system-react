import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.tr`
  cursor: pointer;
  
  &:hover {
    & > td {
      background: #aaaaaa;
    }
  }
`

const Cell = styled.td`
  padding: 5px 15px;
  background: #cccccc;
  color: #222222;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-size: 20px;
  margin-bottom: 30px;
`

const Row = ({item = {}, item: { id } = '', fields, rowClicked}) => (
  <Wrapper
    onClick={rowClicked.bind(this, id)}>
    {Object.keys(fields).map((field, key) => (
      <Cell key={key}>{item[field]}</Cell>
    ))}
  </Wrapper>
)

export default Row
