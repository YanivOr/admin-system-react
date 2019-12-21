import React from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Layout from '../components/layout/Layout'
import Dashboard from '../components/layout/Dashboard'
import Loading from '../components/layout/Loading'
import Accounts from '../components/entities/Accounts'
import Posts from '../components/entities/Posts'
import { checkAuth } from '../services/auth'

const initialState = {
  INIT: 'init',
  ROUTE: 'route',
  REDIRECT: 'redirect',
}

const CustomRoute = (props) => {
  const {INIT, ROUTE, REDIRECT} = initialState

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

export {
  CustomRoute,
  initialState,
}
