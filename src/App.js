import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import Content from './layout/Content';
import Dashboard from './layout/Dashboard';
import Accounts from './entities/Accounts';
import Posts from './entities/Posts';

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

const App = () => {

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
    <Router>
      <Wrapper>
        <Header
          btnClicked={menuBtnClicked}>
        </Header>
        <Menu
          btnClicked={menuItemClicked}
          isVisible={state.menu.isVisible}>
        </Menu>
        <Content>
          <Switch>
            <Route path="/accounts">
              <Accounts></Accounts>
            </Route>
            <Route path="/posts">
              <Posts></Posts>
            </Route>
            <Route path="/">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Content>
        <Footer></Footer>
      </Wrapper>
    </Router>
  );
}

export default App;
