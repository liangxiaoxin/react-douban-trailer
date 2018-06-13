import React, { Component } from 'react';
import {getTop250} from '../../api'
class Annual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top250List:[]
    }
  }
  componentWillMount () {
    getTop250({start:1,count:10}).then(result=>{
      this.setState = {top250List:result.data}
    })

  }
  render() {
    return (
      <h1>年度榜单{this.props.name}</h1>
    );
  }
}

export default Annual;
