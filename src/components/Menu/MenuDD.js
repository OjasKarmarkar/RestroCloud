import React from 'react'
import MenuItem from './MenuItem'

function MenuDD({ddId, ddItems}) {
  //console.log(ddItems)
  return (
    <div id={ddId} className='w-full flex flex-col justify-center items-center my-4 py-10'>
    <div className='w-screen bg-sky-400 h-10 text-white flex justify-center items-center px-5'>
      {ddId}
    </div>
    {ddItems.map((item,index)=>{
      return <MenuItem itemId={1} itemInfo={item} key={index}/>
    })}
    </div>
  )
}

export default MenuDD