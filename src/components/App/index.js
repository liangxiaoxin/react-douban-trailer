import React, { Component } from 'react';
import './index.less'
import {
  NavLink
} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'app-container'}>
        <header className={'c-header'}>
          <h1 className={'app-title'}>豆瓣</h1>
          <nav>
            <ul className={'header-nav'}>
              <li>
                <NavLink to="/about">我的</NavLink>
              </li>
              <li>
                <NavLink to="/movie">影片</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section className={'section-container'}>
          {this.props.children}
        </section>
      </div>
    );
  }
}
export default App;