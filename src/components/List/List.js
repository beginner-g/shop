import React, { Component } from 'react'
import './list.css'
class List extends Component {
  render(){
    const {goods,handleSub}=this.props
    const goodsList=goods.filter(t=>t.buy===true)
    const showList=goodsList.map(t=>(
      <div key={t.id} className="shop-goods">
        <div className='left'>
          <img src={t.good} alt=""/>
          <p>
            <span>{t.title}</span>
            <span className='price'>{`$ ${t.price}`}</span>
          </p>
        </div>
        <div className="right">
          <p>
            <a href="javascript:;" className="sub" onClick={()=>handleSub('-',t)}>-</a>
            <span>{t.num}</span>
          <a href="javascript:;" className="add" onClick={()=>handleSub('+',t)}>+</a>
          </p>
        </div>
      </div>
    ))
    return(
      <div className="list">
        <h2 className='tolato'>元</h2>
        <div className="goods-list">
          {showList}
        </div>
      </div>
    )
  }
}

export default List
