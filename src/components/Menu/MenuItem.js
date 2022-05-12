import React from 'react'

function MenuItem({itemInfo}) {
  return (
    <div className='h-48 w-[95%] bg-white dark:bg-slate-800 dark:text-white mt-4 rounded-md flex p-3 relative'>
      
      <div className='h-full aspect-square bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center'>
        <button className='absolute z-10 bg-black py-1 px-3 rounded-md bottom-1 text-white'>
          Add +
        </button> 
        <img src=	{itemInfo.img} 
             alt="dish"
             className='h-auto w-auto'
        />
      </div>

      <div className='h-full w-full ml-10 rounded-lg space-y-3'>
        <p className='text-3xl font-bold'>{itemInfo.name}</p>
        <div className='text-gray-700 dark:text-slate-300'>
          <p className='pr-2'>Ingredients: </p>
          {itemInfo.ingredients.map((item,index)=>{
            return item
          })}
        </div>
        <p className='text-2xl font-semibold'>₹69</p>
      </div>
    </div>
  )
}

export default MenuItem