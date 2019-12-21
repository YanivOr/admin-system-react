import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Layout from '../components/Layout'
import Loading from '../components/Common/Loading'
import Dashboard from '../components/Views/Dashboard'
import Accounts from '../components/Views/Accounts'
import Posts from '../components/Views/Posts'
import { checkAuth } from '../services/auth'
import { INIT, ROUTE, REDIRECT } from './constants'

const CustomRoute = (props) => {
  const {isValid, setRoute} = props

  ;(async () => {
    const {redirect, isTokenValid} = await checkAuth(props)

    if (isTokenValid && !redirect) {
      setRoute(ROUTE)
    }
    else if (isTokenValid && redirect) {
      setRoute(REDIRECT)
    }
    else {
      setRoute(INIT)
    }
  })()

  if (isValid === INIT) {
    return <Loading>Loading...</Loading>
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
    )
  }
  else if (isValid === REDIRECT) {
    return (
      <Redirect to="/" />
    )
  }
}

export default CustomRoute
