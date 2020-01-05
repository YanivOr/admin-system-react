import React, { useState } from "react"
import styled from 'styled-components'
import Header from './Header'
import Menu from '../General/Menu'
import Content from './Content'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const initialState = {
  menu: {
    isVisible: false,
  },
}

const Layout = ({children}) => {

  const [state, setState] = useState(initialState)

  const menuBtnClicked = () => {
    let newState

    newState = {...state}
    newState.menu.isVisible = !state.menu.isVisible

    setState(newState)
  }

  const menuItemClicked = () => {
    let newState

    newState = {...state}
    newState.menu.isVisible = false

    setState(newState)
  }

  return (
      <Wrapper>
        <Header
          btnClicked={menuBtnClicked}>
        </Header>
        <Menu
          btnClicked={menuItemClicked}
          isVisible={state.menu.isVisible}>
        </Menu>
        <Content>
          {children}
        </Content>
      </Wrapper>
  )
}

export default Layout
