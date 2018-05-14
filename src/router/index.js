import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import App from '../components/App/index'
import MovieList from '../views/MovieList/index'
import About from '../views/About/index'

const router = (
  <Router>
    <App>
      <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
        <Route path="/movie" component={MovieList} />
        <Route path="/about" component={About}>
        </Route>
        <Redirect from="/" to="/movie"/> {/*重定向*/}
      </Switch>
    </App>
  </Router>
)
export default router
