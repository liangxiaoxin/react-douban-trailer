import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import App from '../components/App'
import MovieList from '../components/MovieList'
import About from '../components/About'

const router = (
  <Router>
    <App>
      <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
        <Route path="/movie" component={MovieList} />
        <Route path="/about" component={About}>
        </Route>
      </Switch>
    </App>
  </Router>
)
export default router
