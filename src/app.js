import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import currentUser from './utils/current-user'
import AuthenticatedLayout from './layouts/authenticated'

import Login from './components/login'
import Signup from './components/signup'
import Clients from './components/clients/clients'
import Client from './components/clients/client'
import NewClient from './components/clients/new-client'
import EditClient from './components/clients/edit-client'
import Payments from './components/payments/payments'

function requireAuth(nextState, replaceState) {
  if (!currentUser) {
    replaceState({}, '/login')
  }
}

function redirectIfAuth(nextState, replaceState) {
  if (currentUser) {
    replaceState({}, '/clients')
  }
}

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path='/login' component={Login} onEnter={redirectIfAuth} />
    <Route path='/signup' component={Signup} onEnter={redirectIfAuth} />

    <Route path='/' component={AuthenticatedLayout} onEnter={requireAuth}>
      <Route path='clients' component={Clients} />
      <Route path='clients/new' component={NewClient} />
      <Route path='clients/:clientId' component={Client} />
      <Route path='clients/:clientId/edit' component={EditClient} />
      <Route path='payments' component={Payments} />
    </Route>
  </Router>
), document.getElementById('app'))