import React from 'react'
import { useSelector } from 'react-redux'

function EmptyOrders() {
  
  const bill = useSelector( state => state.bill.value )

  return (
    <>
    {Object.entries(bill).length===0?
      <div className='fixed bg-slate-200 dark:bg-black dark:text-white h-auto w-full flex justify-center text-3xl md:text-6xl lg:text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 
          <p>Orders Are Empty</p>
      </div>
      :
      <div className='fixed bg-slate-200 dark:bg-black dark:text-white h-auto w-full flex justify-center text-3xl md:text-6xl lg:text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 
          <p>Thank you for ordering</p>
      </div>
    }
    </>
  )
}

export default EmptyOrders