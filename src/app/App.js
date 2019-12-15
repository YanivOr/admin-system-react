import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CustomRoute, initialState } from './CustomRoute';
import rootReducer from '../reducers/'

const App = () => {
  const [isValid, setState] = useState(initialState.INIT);

  const setRoute = route => {
    setState(route);
  };

  const store = createStore(
    rootReducer,
    composeWithDevTools()
  );

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <CustomRoute
            isValid={isValid}
            setRoute={setRoute}
            setState={setState}></CustomRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
