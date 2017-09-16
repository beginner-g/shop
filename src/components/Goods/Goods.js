import React, { Component } from 'react'
import './goods.css'
class Goods extends Component {
  handleClick=(id)=>{
   this.props.completeBuy(id)
  }
  render(){
    const {goods}=this.props
    const showGoods=goods.map(t=>(
      <div key={t.id} className="good-img">
        <img className='img' src={t.good} alt=""/>
      <div onClick={()=>this.handleClick(t.id)}
        className={`buy ${t.buy&&'active'}`}>
        {this.props.complete(t.buy)}</div>
      </div>
    ))
    return(
      <div className="goods">
        {showGoods}
      </div>
    )
  }
}

export default Goods
