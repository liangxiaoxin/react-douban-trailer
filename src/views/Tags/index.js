import React, { Component } from 'react';
import {getUserInfo} from '../../api'
class Tags extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    getUserInfo().then((res)=>{
      console.log(res);
    })
    return (
      <h1>影片分类</h1>
    );
  }
}

export default Tags;
