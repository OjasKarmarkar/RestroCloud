import React from 'react'

function BillItem({ name, count, cost }) {
  return (
    <div className='w-[75vw] flex justify-between mx-5 my-2 border-b-2 border-slate-300 dark:border-slate-600'>
        <p className='font-thin text-2xl'>{name} x {count}</p>
        <p className='font-bold text-2xl'>₹ {cost * count}</p>
    </div>
  )
}

export default BillItem