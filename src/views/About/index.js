import React, { Component } from 'react';
import {getUserInfo} from '../../api'
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    getUserInfo().then((res)=>{
      console.log(res);
    })
    return (
      <h1>关于我的</h1>
    );
  }
}

export default About;
