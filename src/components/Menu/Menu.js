import React from 'react'
import MenuDD from './MenuDD'
import'./Menu.css'

function Menu({items}) {
  //console.log(Object.entries(items))
  return (
    <div className='menu'>
      {Object.entries(items).map((item,index)=>{
        return <MenuDD ddId={item[0]} ddItems={item[1]} key={index}/>
      })}
    </div>
  )
}

export default Menu