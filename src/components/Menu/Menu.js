import React from 'react'
import MenuDD from './MenuDD'
import'./Menu.css'

function Menu() {
  return (
    <div className='menu'>
    <MenuDD ddId={1}/>
    <MenuDD ddId={2}/>
    <MenuDD ddId={3}/>
    </div>
  )
}

export default Menu