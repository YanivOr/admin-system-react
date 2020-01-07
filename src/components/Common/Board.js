import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: auto;
  background: #333333;
  color: #dddddd;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  margin: 20px;
  padding: 20px;
`

const Board = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Board
