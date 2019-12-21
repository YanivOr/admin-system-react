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

const redirectByAuth = async (props) => {
  const {setRoute} = props
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
}

const CustomRoute = (props) => {
  const {routeState} = props
  redirectByAuth(props)

  if (routeState === INIT) {
    return <Loading/>
  }
  else if (routeState === ROUTE) {
    return (
      <Switch>
        <Route path="/accounts">
          <Layout>
            <Accounts/>
          </Layout>
        </Route>
        <Route path="/posts">
          <Layout>
            <Posts/>
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Dashboard/>
          </Layout>
        </Route>
      </Switch>
    )
  }
  else if (routeState === REDIRECT) {
    return (
      <Redirect to="/"/>
    )
  }
}

export default CustomRoute
