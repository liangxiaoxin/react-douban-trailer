import React, { Component } from 'react';
import exam from '../../assets/images/exam.jpg'
import './index.less'
// import ratingStarEmpty from '../../assets/images/rating-star-empty.png'
// import ratingStarFull from '../../assets/images/rating-star-full.png'


class All extends Component {
  constructor(props) {
    super(props);
    this.state={
      movieList : [{title:'后来的fdfdfdf我们1',rate:7.5},{title:'bilibili',rate:7.5},{title:'后来的我们3',rate:7.5},{title:'后来的我2们',rate:7.5},{title:'后来4的我们',rate:7.5}]
    }
  }
  render() {
    console.log('aaa')
    return (
      <div>
        <h1 className={'title'}>所有影片</h1>
        <div className={'list-wrapper'}>
          <ul className={'list-box'}>
            {
              this.state.movieList.map((item,index)=>
                <li key={item.title} className={'item'}>
                  <img className={'cover'} src={exam} alt=""/>
                  <h3>{item.title}</h3>
                  <p className={'remark'}>
                    <span className={'rating-stars'}>
                      <span className={'rating-star rating-star-small-full'}></span>
                      <span className={'rating-star rating-star-small-full'}></span>
                      <span className={'rating-star rating-star-small-full'}></span>
                      <span className={'rating-star rating-star-small-full'}></span>
                      <span className={'rating-star rating-star-small-empty'}></span>
                    </span>
                    <span className={'rate'}>5.5</span>
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
