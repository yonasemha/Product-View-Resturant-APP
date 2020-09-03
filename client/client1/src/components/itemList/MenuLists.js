import React from 'react';
import MenuList from './MenuList';
import './MenuLists.css'

const menulist =(props)=>{
  console.log(props)
    return (
      <div className="MenuLists">
        {props.menu.map(item=>{
    return <MenuList 
    name={item.name}
    price={item.price}
    description={item.description}
    key={item._id}
    detail={()=>props.detail(item.name)}
    order ={()=>props.orderItem(item.name)}
    />
  })}
      </div>
    )
}
 
export default menulist;