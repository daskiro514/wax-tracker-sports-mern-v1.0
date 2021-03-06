import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'
import NotFound from '../layout/NotFound'
import PrivateRoute from '../routing/PrivateRoute'
import Search from '../layout/Search'

const Routes = props => {
  return (
    <section className="container-fluid">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/search" component={Search} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
