import React, { Component } from 'react'
import Goods from '../Goods/Goods'
import List from '../List/List'
class Home extends Component {
  state={
    goods:[
      {
      id:1,
      good:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=490374653,3763965140&fm=27&gp=0.jpg',
      title:'脆皮朱古力蛋糕',
      price:12,
      num:1,
      buy:false
    },
      {
      id:2,
      good:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3463154630,851888036&fm=27&gp=0.jpg',
      title:'云石芝士蛋糕',
      price:12,
      num:1,
      buy:false
    },
      {
      id:3,
      good:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3419714750,517058921&fm=27&gp=0.jpg',
      title:'绿茶布朗尼蛋糕',
      price:12,
      num:1,
      buy:false
    },
      {
      id:4,
      good:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2640805390,438696420&fm=200&gp=0.jpg',
      title:'黑森林蛋糕',
      price:22,
      num:1,
      buy:false
    }
  ],
    tolato:''
  }
  complete=(t)=>{
    if(t){
      return '已购'
    }else{
      return '购买'
    }
  }
  completeBuy=(id)=>{
    console.log(id)
    let newgoods = this.state.goods
      newgoods.find(re => re.id===id).buy=true
      const fifterbuy=newgoods.filter(t=>t.buy==true)
      this.setState({
        goods:newgoods,
        tolato:this.changetotal(fifterbuy)
    })
  }
  handleSub=(val,ind)=>{
    const newgoods1=this.state.goods
    console.log(val)
    console.log(ind)
    if(val==='-'){
        newgoods1.map(t=>{
          if(ind===t.id&&t.num!==0){
            return t.num=t.num-1
          }
          return t
        })
        this.setState({
          goods:newgoods1,
          tolato:this.changetotal(newgoods1)
        })
    }
    if(val==='+'){
      newgoods1.map(t=>{
        if(ind===t.id){
          t.num=t.num+1
        }
        return t
      })
      this.setState({
        goods:newgoods1,
        tolato:this.changetotal(newgoods1)
      })
    }
  }
  changetotal=(newgoods1)=>{
    const total = newgoods1.reduce((sum, t) => {
      return sum + t.price*t.num
    }, 0)
    return total
  }
  render(){
    const {goods,tolato}=this.state
    return(
      <div className="home">
        <div className="goods-wrap">
        <Goods
          goods={goods}
          complete={this.complete}
          completeBuy={this.completeBuy}
        />
        </div>
        <div className="list-wrap">
        <List
          goods={goods}
          handleSub={this.handleSub}
          tolato={tolato}
          changetotal={this.changetotal}
        />
        </div>
      </div>
    )
  }
}

export default Home
