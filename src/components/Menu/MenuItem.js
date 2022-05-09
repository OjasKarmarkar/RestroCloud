import React from 'react'

function MenuItem() {
  return (
    <div className='h-48 w-[95%] bg-white my-1 border-2 rounded-md flex p-3 relative'>
      
      <div className='h-full aspect-square bg-white rounded-lg border-4 flex items-center justify-center'>
        <div className='absolute bg-black py-1 px-3 rounded-md bottom-1 text-white'>
          Add +
        </div>
        photo
      </div>

      <div className='h-full w-full ml-10 rounded-lg space-y-3'>
        <p className='text-3xl font-bold'>Title</p>
        <p className='text-gray-700'>Description</p>
        <p className='text-2xl font-semibold'>₹69</p>
      </div>
    </div>
  )
}

export default MenuItem