import React, { Component } from 'react';
import './index.less'
import {getMovieList} from "../../api";
import {getScrollHeight, getClientHeight} from '../../utils/utils'

class All extends Component {
  constructor(props) {
    super(props);
    this.state={
      movieList : [],
      scrollTop:0,
      isLoadMore:true
    }
  }
  componentWillMount() {
    const loadData = () => {
      getMovieList().then((res)=>{
        let list = this.state.movieList.concat(res.data)
        this.setState({movieList:list})
      })
    }
    loadData()
    let _self = this
    window.onscroll = function (e) {
      _self.setState({
        scrollTop : document.documentElement.scrollTop || document.body.scrollTop})
      // 判断是否滚动到底部
      if (_self.state.scrollTop + getClientHeight() == getScrollHeight()) {
        console.log(123);
        // 是否允许继续加载数据
        if (_self.state.isLoadMore) {
          console.log('滑动到底部');
          setTimeout(()=>{
            loadData()
          },2000)
        }
      }
    }
  }
  render() {
    const CalculateFullStar = (rate) =>  {
      let fullStar = Math.floor(rate)/2
      let starAll = []
      for (let i=0;i<=5;i++) {
        if (i<=fullStar) {
          starAll.push(1)
        }else {
          starAll.push(0)
        }
      }
      return (
        starAll.map((item,index)=>
          item === 1 ? <span key={index} className={'rating-star rating-star-small-full'}></span> : <span key={index}  className={'rating-star rating-star-small-empty'}></span>
        )
      );
    }
    return (
      <div>
        <h1 className={'title'}>所有影片</h1>
        <div className={'list-wrapper'}>
          <ul className={'list-box'}>
            {
              this.state.movieList.map((item,index)=>
                <li key={index} className={'item'}>
                  <img className={'cover'} src={item.poster} alt=""/>
                  <h3>{item.title}</h3>
                  <p className={'remark'}>
                    <span className={'rating-stars'}>
                      {CalculateFullStar(item.rate)}
                    </span>
                    <span className={'rate'}>{item.rate}</span>
                  </p>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default All;
