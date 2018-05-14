import React, { Component } from 'react';
import {getUserInfo} from '../../api'
class Annual extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    getUserInfo().then((res)=>{
      console.log(res);
    })
    return (
      <h1>年度榜单</h1>
    );
  }
}

export default Annual;
