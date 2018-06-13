import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import App from '../components/App/index'
import All from '../views/All/index'
import Annual from '../views/Annual/index'
import Tags from '../views/Tags/index'

const router = (
  <Router>
    <App>
      <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
        <Route path="/all" component={All} />
        <Route path="/annual" component={Annual}></Route>
        <Route path="/tags" component={Tags}></Route>
        <Redirect from="/" to="/all"/> {/*重定向*/}
      </Switch>
    </App>
  </Router>
)
export default router
