import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './layout/Dashboard';
import Loading from './layout/Loading';
import Accounts from './entities/Accounts';
import Posts from './entities/Posts';
import { checkAuth } from './services/auth';

const initialState = {
  INIT: 'init',
  ROUTE: 'route',
  REDIRECT: 'redirect',
};

const CustomRoute = (props) => {
  const {isValid, setState} = props;
  const {INIT, ROUTE, REDIRECT} = initialState;

  (async () => {
    const {redirect, isTokenValid} = await checkAuth(props);

    if (isTokenValid && !redirect) {
      setState(ROUTE);
    }
    else if (isTokenValid && redirect) {
      setState(REDIRECT);
    }
    else {
      setState(INIT);
    }
  })();

  if (isValid === INIT) {
    return <Loading>Loading...</Loading>;
  }
  else if (isValid === ROUTE) {
    return (
      <Switch>
        <Route path="/accounts">
          <Layout>
            <Accounts></Accounts>
          </Layout>
        </Route>
        <Route path="/posts">
          <Layout>
            <Posts></Posts>
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Dashboard></Dashboard>
          </Layout>
        </Route>
      </Switch>
    );
  }
  else if (isValid === REDIRECT) {
    return (
      <Redirect to="/" />
    );
  }
};

const App = () => {
  const [isValid, setState] = useState(initialState.INIT);

  return (
    <Router>
      <Switch>
        <CustomRoute
          isValid={isValid}
          setState={setState}></CustomRoute>
       </Switch>
    </Router>
  );
}

export default App;
