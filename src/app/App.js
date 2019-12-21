import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import CustomRoute from './CustomRoute'
import { INIT } from './constants'

const App = () => {
  const [routeState, setState] = useState(INIT)

  const setRoute = route => {
    setState(route);
  }

  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <CustomRoute
            routeState={routeState}
            setRoute={setRoute}
          />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
