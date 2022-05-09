import React from 'react'
import MenuItem from './MenuItem'

function MenuDD({ddId}) {
  return (
    <div className='w-full flex flex-col justify-center items-center my-4'>
    <div className='w-screen bg-black h-10 text-white flex justify-center items-center px-5'>
      Category {ddId}
    </div>
    <MenuItem itemId={1}/>
    <MenuItem itemId={2}/>
    <MenuItem itemId={3}/>
    </div>
  )
}

export default MenuDD