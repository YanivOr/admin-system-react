import React, {useEffect} from 'react'
import { useDispatch, useSelector }  from 'react-redux'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { setRouteState } from '../store/actions/router'
import Layout from '../components/Layout'
import Loading from '../components/Common/Loading'
import Dashboard from '../components/Views/Dashboard'
import Accounts from '../components/Views/Accounts'
import Posts from '../components/Views/Posts'
import { checkAuth } from '../services/auth'
import {
  INIT,
  ROUTE,
  REDIRECT 
} from '../store/reducers/router/constants'

const redirectByAuth = async (props, dispatch) => {
  const {redirect, isTokenValid} = await checkAuth(props)
  let routeState = INIT

  if (isTokenValid && !redirect) {
    routeState = ROUTE
  } else if (isTokenValid && redirect) {
    routeState = REDIRECT
  } else {
    routeState = INIT
  }

  dispatch(setRouteState(routeState))
}

const CustomRoute = (props) => {
  const {
    routeState,
  } = useSelector(state => state.router)
  const dispatch = useDispatch()

  useEffect(() => {
    redirectByAuth(props, dispatch)
  }, [dispatch, props])
  

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
