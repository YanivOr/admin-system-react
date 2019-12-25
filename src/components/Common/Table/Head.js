import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.tr``

const Cell = styled.th`
  text-align: left;
  padding: 5px 15px;
  background: #cccccc;
  color: #222222;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`

const Head = ({fields}) => (
  <Wrapper>
    {fields.map((field, key) => (
      <Cell key={key}>{field}</Cell>
    ))}
  </Wrapper>
)

export default Head
