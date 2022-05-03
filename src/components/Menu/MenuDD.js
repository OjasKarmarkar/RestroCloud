import React from 'react'
import MenuItem from './MenuItem'

function MenuDD({ddId}) {
  return (
    <div className='menu-dd'>
    <div>{ddId}</div>
    <MenuItem itemId={1}/>
    <MenuItem itemId={2}/>
    <MenuItem itemId={3}/>
    </div>
  )
}

export default MenuDD