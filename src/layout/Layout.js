import React, { useState } from "react";
import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Menu from '../layout/Menu';
import Content from '../layout/Content';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const initialState = {
  menu: {
    isVisible: false,
  },
};

const Layout = ({children}) => {

  const [state, setState] = useState(initialState);

  const menuBtnClicked = () => {
    let newState;

    newState = {...state};
    newState.menu.isVisible = !state.menu.isVisible;

    setState(newState);
  };

  const menuItemClicked = () => {
    let newState;

    newState = {...state};
    newState.menu.isVisible = false;

    setState(newState);
  };

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
        <Footer></Footer>
      </Wrapper>
  );
}

export default Layout;
