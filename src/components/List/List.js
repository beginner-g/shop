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
            <button className="sub" onClick={()=>handleSub('-',t.id)}>-</button>
            <span>{t.num}</span>
          <button className="add" onClick={()=>handleSub('+',t.id)}>+</button>
          </p>
        </div>
      </div>
    ))
    const {tolato}=this.props
    console.log(tolato)
    return(
      <div className="list">
        <h2 className='tolato'>{`${tolato ? tolato : '0.00'} 元`}</h2>
        <div className="goods-list">
          {showList}
        </div>
      </div>
    )
  }
}

export default List
