import React, { useEffect } from 'react'
import { useDispatch, useSelector }  from 'react-redux'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { handleAuth } from '../store/actions/router'
import { getItems } from '../store/actions/entities'
import Layout from '../components/Layout'
import Loading from '../components/Common/Loading'
import Dashboard from '../components/Views/Dashboard'
import Accounts from '../components/Views/Accounts'
import Posts from '../components/Views/Posts'
import {
  INIT,
  ROUTE,
  REDIRECT 
} from '../store/reducers/router/constants'

const CustomRoute = (props) => {
  const {
    routeState,
  } = useSelector(state => state.router)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleAuth(props))

    if (routeState === ROUTE) {
      dispatch(getItems('accounts'))
      dispatch(getItems('posts'))
    }
    
  }, [dispatch, props, routeState])

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
