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
          <h1 className={'app-title'}>豆瓣电影</h1>
          <nav>
            <ul className={'header-nav'}>
              <li>
                <NavLink to="/movie">所有影片</NavLink>
              </li>
              <li>
                <NavLink to="/tags">分类</NavLink>
              </li>
              <li>
                <NavLink to="/annual">年度榜单</NavLink>
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