import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accounts from './components/accounts';
import Posts from './components/posts';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/accounts">
            <Accounts></Accounts>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
