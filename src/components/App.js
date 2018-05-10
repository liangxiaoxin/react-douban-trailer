import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>app</h1>
        <ul>
          <li><NavLink
            to="/movie"
            activeClassName="selected"
          >影片</NavLink>
          </li>
          <li><NavLink
            to="/about"
            activeClassName="selected"
          >我的</NavLink>
          </li>
        </ul>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}
export default App;