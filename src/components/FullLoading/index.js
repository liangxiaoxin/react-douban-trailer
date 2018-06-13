import React, { Component } from 'react';
import './index.less'
import loadingImg from '../../assets/images/loading.gif'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  static defaultProps = {
    loadingText : '加载中',
    isFullLoading:false
  }
  render() {
    if (this.props.isFullLoading) {
      return (
        <div className={'loading-layout'} >
          <div className={'loading-cont'}>
            <div className={'inner'}>
              <img src={loadingImg} alt="" />
              <span>{this.props.loadingText}</span>
            </div>
          </div>
        </div>
      )
    }else {
      return null
    }
  }
}
export default App;