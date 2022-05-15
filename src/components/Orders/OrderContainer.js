import React from 'react'
import Order from './Order'
import { useSelector } from 'react-redux'

function OrderContainer() {

  const orders = useSelector( state => state.order.value )
  console.log(Object.entries(orders))
  return (
    <div className='fullpage w-full p-5 shadow-lg bg-slate-200 dark:bg-black'>
        {Object.entries(orders).map((item, index) => {
          console.log(item)
          return <Order info={item[1].info} count={item[1].count} key={index} />
        })}
    </div>
  )
}

export default OrderContainer