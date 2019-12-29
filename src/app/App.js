import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import CustomRoute from './CustomRoute'

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <CustomRoute/>
      </Switch>
    </Router>
  </Provider>  
)

export default App
