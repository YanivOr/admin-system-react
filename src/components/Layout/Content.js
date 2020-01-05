import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: auto;
`

const Content = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Content
