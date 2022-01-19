/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import { getTokenWithExpiry } from './app/share/util/tokenSetting'
import {
  Landing,
  Chat,
  Auth,
  Map
} from './app/index'

const App = () => {
  let routes
  if (getTokenWithExpiry('room')) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
          <Route path="/map" exact>
          <Map />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
          <Route path="/map" exact>
          <Map />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    )
  }

  return (
    <Router>
      {routes}
    </Router>
  )

}

export default App


