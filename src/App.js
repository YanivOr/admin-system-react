import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './layout/Dashboard';
import Accounts from './entities/Accounts';
import Posts from './entities/Posts';
import { checkAuth } from './services/auth';

const CustomRoute = (props) => {
  const {isValid, setState} = props;

  (async () => {
    await checkAuth(props) ? setState(true) : setState(false);
  })();

  if(!isValid) {
    return <div>Loading...</div>;
  }

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
};

const App = () => {
  const [isValid, setState] = useState(false);

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
