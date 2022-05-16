import React from 'react'
import Order from './Order'
import OrderButton from './OrderButton'
import EmptyOrders from './EmptyOrders'
import { useSelector } from 'react-redux'

function OrderContainer() {

  const orders = useSelector( state => state.order.value )
  console.log(Object.entries(orders))
  return (
    <div className='fullpage w-full px-5 pt-[3rem] shadow-lg bg-slate-200 dark:bg-black'>
        {Object.entries(orders).map((item, index) => {
          console.log(item)
          return <Order info={item[1].info} count={item[1].count} key={index} />
        })}
        {Object.entries(orders).length === 0 &&
          <EmptyOrders />
        }
        <OrderButton />
    </div>
  )
}

export default OrderContainer