import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { CustomRoute, initialState } from './CustomRoute'

const App = () => {
  const [isValid, setState] = useState(initialState.INIT)

  const setRoute = route => {
    setState(route);
  }

  const store = configureStore()

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
  )
}

export default App
